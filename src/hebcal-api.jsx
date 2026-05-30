// Hebcal API integration for Shabbat and holiday times
// Fetches live data from Hebcal API for Hadera location

const HebcalAPI = {
  // Hadera coordinates
  LOCATION: {
    latitude: 32.4344,
    longitude: 34.9189,
    city: 'Hadera',
    tzid: 'Asia/Jerusalem'
  },

  // Cache to avoid multiple API calls
  cache: {
    shabbat: null,
    lastFetch: null
  },

  // Get Shabbat times and parsha for this week
  getShabbatTimes: function() {
    const self = this;
    // Check cache (valid for 1 hour)
    const now = Date.now();
    if (self.cache.shabbat && self.cache.lastFetch && (now - self.cache.lastFetch < 3600000)) {
      return Promise.resolve(self.cache.shabbat);
    }

    // Hebcal Shabbat times API
    const shabUrl = 'https://www.hebcal.com/shabbat?cfg=json&geonameid=295629&M=on&lg=h';
    
    // Get today's date for Hebrew date conversion
    const today = new Date();
    const convUrl = 'https://www.hebcal.com/converter?cfg=json&gy=' + today.getFullYear() + 
                    '&gm=' + (today.getMonth() + 1) + '&gd=' + today.getDate() + '&g2h=1&strict=1';
    
    return Promise.all([
      fetch(shabUrl).then(function(r) { return r.json(); }),
      fetch(convUrl).then(function(r) { return r.json(); }).catch(function() { return null; })
    ])
      .then(function(results) {
        const shabData = results[0];
        const convData = results[1];
        
        // Parse the Shabbat response
        const result = self.parseShabbatData(shabData);
        
        // Add Hebrew date from converter
        if (convData && convData.hebrew) {
          result.hebrewDate = convData.hebrew;
        }
        
        // Cache the result
        self.cache.shabbat = result;
        self.cache.lastFetch = now;
        
        return result;
      })
      .catch(function(error) {
        console.error('Hebcal API error:', error);
        // Return fallback data
        return self.getFallbackShabbatData();
      });
  },

  // English Tanakh book names (as returned by Hebcal leyning) → Hebrew
  BOOK_NAMES: {
    'Genesis': 'בראשית', 'Exodus': 'שמות', 'Leviticus': 'ויקרא',
    'Numbers': 'במדבר', 'Deuteronomy': 'דברים',
    'Joshua': 'יהושע', 'Judges': 'שופטים',
    'I Samuel': 'שמואל א', 'II Samuel': 'שמואל ב',
    'I Kings': 'מלכים א', 'II Kings': 'מלכים ב',
    'Isaiah': 'ישעיהו', 'Jeremiah': 'ירמיהו', 'Ezekiel': 'יחזקאל',
    'Hosea': 'הושע', 'Joel': 'יואל', 'Amos': 'עמוס', 'Obadiah': 'עובדיה',
    'Jonah': 'יונה', 'Micah': 'מיכה', 'Nahum': 'נחום', 'Habakkuk': 'חבקוק',
    'Zephaniah': 'צפניה', 'Haggai': 'חגי', 'Zechariah': 'זכריה', 'Malachi': 'מלאכי',
    'I Chronicles': 'דברי הימים א', 'II Chronicles': 'דברי הימים ב',
    'Ezra': 'עזרא', 'Nehemiah': 'נחמיה', 'Psalms': 'תהילים', 'Proverbs': 'משלי',
    'Job': 'איוב', 'Song of Songs': 'שיר השירים', 'Ruth': 'רות',
    'Lamentations': 'איכה', 'Ecclesiastes': 'קהלת', 'Esther': 'אסתר', 'Daniel': 'דניאל'
  },

  // Number → Hebrew gematria letters (no gershayim), e.g. 18 → "יח", 37 → "לז"
  numToHebrew: function(num) {
    const ones = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
    const tens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
    const hundreds = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'];
    let n = num % 1000;
    let s = hundreds[Math.floor(n / 100)];
    n %= 100;
    if (n === 15) s += 'טו';
    else if (n === 16) s += 'טז';
    else { s += tens[Math.floor(n / 10)] + ones[n % 10]; }
    return s;
  },

  // Convert a Hebcal English reading range to the Hebrew display format used on the site.
  // "Numbers 8:1-12:16"  → "במדבר ח · א — יב · טז"
  // "II Kings 4:1-37"    → "מלכים ב · ד · א — לז"
  // Returns null if it can't parse (caller falls back to the manual value).
  formatHebReading: function(eng) {
    if (!eng || typeof eng !== 'string') return null;
    const m = eng.match(/^(.+?)\s+(\d+):(\d+)\s*[-–]\s*(?:(\d+):)?(\d+)$/);
    if (!m) return null;
    const book = this.BOOK_NAMES[m[1]] || m[1];
    const ch1 = parseInt(m[2], 10), v1 = parseInt(m[3], 10);
    const ch2 = m[4] ? parseInt(m[4], 10) : ch1;
    const v2 = parseInt(m[5], 10);
    const nh = this.numToHebrew.bind(this);
    // multi-word book names (e.g. "מלכים ב") get a "·" before the chapter for clarity
    const sep = book.indexOf(' ') >= 0 ? ' · ' : ' ';
    if (ch1 === ch2) {
      return book + sep + nh(ch1) + ' · ' + nh(v1) + ' — ' + nh(v2);
    }
    return book + sep + nh(ch1) + ' · ' + nh(v1) + ' — ' + nh(ch2) + ' · ' + nh(v2);
  },

  // Parse Hebcal API response
  parseShabbatData: function(data) {
    const self = this;
    const items = data.items || [];
    
    let candleLighting = null;
    let havdalah = null;
    let parsha = null;
    let holiday = null;
    let isHoliday = false;
    let torahReading = null;
    let haftarah = null;

    items.forEach(function(item) {
      if (item.category === 'candles') {
        candleLighting = self.formatTime(item.date);
      } else if (item.category === 'havdalah') {
        havdalah = self.formatTime(item.date);
      } else if (item.category === 'parashat') {
        parsha = item.hebrew || item.title;
        // Torah reading + Haftarah ranges (leyning), converted to Hebrew display
        if (item.leyning) {
          torahReading = self.formatHebReading(item.leyning.torah);
          haftarah = self.formatHebReading(item.leyning.haftarah || item.leyning.haftara);
        }
      } else if (item.category === 'holiday') {
        holiday = item.hebrew || item.title;
        isHoliday = true;
      }
    });

    return {
      candleLighting: candleLighting,
      havdalah: havdalah,
      parsha: parsha,
      holiday: holiday,
      isHoliday: isHoliday,
      torahReading: torahReading,
      haftarah: haftarah,
      title: data.title,
      hebrewDate: '', // Will be filled by getShabbatTimes
      location: data.location
    };
  },

  // Format ISO date to HH:MM
  formatTime: function(isoString) {
    if (!isoString) return null;
    const date = new Date(isoString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return hours + ':' + minutes;
  },

  // Fallback data in case API fails
  getFallbackShabbatData: function() {
    return {
      candleLighting: '19:03',
      havdalah: '20:02',
      parsha: 'במדבר',
      holiday: null,
      isHoliday: false,
      torahReading: null,
      haftarah: null,
      title: 'שבת',
      hebrewDate: 'ב׳ סיון',
      location: { city: 'חדרה' }
    };
  },

  // Get prayer times for Shabbat (static times from synagogue)
  getShabbatPrayerTimes: function() {
    return {
      kabbalatShabbat: '18:45',
      shacharit: ['07:00', '08:45'],
      minchaGedola: '13:20',
      shiur: '18:15',
      minchaSeuda: '18:15',
      arvitMotzaei: null
    };
  },

  // Get holiday prayer times (simplified)
  getHolidayPrayerTimes: function(holidayName) {
    return {
      shacharit: ['07:00', '09:00'],
      mincha: '18:30',
      arvit: '19:45'
    };
  }
};

// Make available globally
window.HebcalAPI = HebcalAPI;
