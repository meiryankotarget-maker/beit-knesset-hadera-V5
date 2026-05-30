// Data for the synagogue website
const SITE = {
  name: 'בית הכנסת הגדול חדרה',
  tagline: 'מגדל אור של תורה ותפילה בלב העיר',
  founded: 1936,
  hebrewYear: 'תרצ"ו',
  address: 'רחוב הרברט סמואל 33, חדרה',
  phone: '04-633-4512',
  whatsapp: '050-721-8833',
  email: 'info@hagadol-hadera.org.il',
  officeHours: 'א׳–ה׳ 09:00–13:00 · 16:00–19:00',
};

const NAV = [
  { id: 'home', label: 'דף הבית' },
  { id: 'about', label: 'אודות' },
  { id: 'times', label: 'זמני תפילה' },
  { id: 'gallery', label: 'גלריה וזיכרון' },
  { id: 'parasha', label: 'פרשת השבוע' },
  { id: 'heritage', label: 'מורשת ואדריכלות' },
  { id: 'memorial', label: 'הנצחות וזיכרון' },
  { id: 'contact', label: 'צור קשר' },
];

// Prayer times for the week — realistic for Hadera, spring
const PRAYER_WEEK = [
  { day: 'ראשון', date: 'כ״ה אייר', shacharit: ['06:00', '07:30'], mincha: ['19:15'], arvit: ['19:45', '21:00'] },
  { day: 'שני',   date: 'כ״ו אייר', shacharit: ['06:00', '07:30'], mincha: ['19:15'], arvit: ['19:45', '21:00'] },
  { day: 'שלישי', date: 'כ״ז אייר', shacharit: ['06:00', '07:30'], mincha: ['19:15'], arvit: ['19:45', '21:00'] },
  { day: 'רביעי', date: 'כ״ח אייר', shacharit: ['06:00', '07:30'], mincha: ['19:15'], arvit: ['19:45', '21:00'] },
  { day: 'חמישי', date: 'כ״ט אייר', shacharit: ['05:50', '07:30'], mincha: ['19:15'], arvit: ['19:45', '21:00'] },
  { day: 'שישי',  date: 'א׳ סיון',   shacharit: ['06:00', '07:30'], mincha: ['18:45'], arvit: ['19:40'] , candles: '19:03' },
  { day: 'שבת',   date: 'ב׳ סיון',   shacharit: ['07:00', '08:45'], mincha: ['18:15'], arvit: ['20:02'], havdala: '20:02', parsha: 'פרשת במדבר' },
];

const ZMANIM = [
  { label: 'עלות השחר', time: '04:17' },
  { label: 'נץ החמה', time: '05:41' },
  { label: 'סוף זמן ק״ש (מג״א)', time: '08:30' },
  { label: 'סוף זמן ק״ש (גר״א)', time: '09:07' },
  { label: 'חצות היום', time: '12:43' },
  { label: 'מנחה גדולה', time: '13:16' },
  { label: 'שקיעה', time: '19:45' },
  { label: 'צאת הכוכבים', time: '20:06' },
];

const EVENTS = [
  { date: '2 סיון', title: 'שבת מברכים · סיום מסכת', desc: 'סעודה שלישית חגיגית בהשתתפות הקהל', tag: 'שבת מיוחדת' },
  { date: '5 סיון', title: 'ליל שבועות — תיקון', desc: 'לימוד מרתק עד אור הבוקר עם חלב ועוגות גבינה', tag: 'חג' },
  { date: '14 סיון', title: 'מופע חזנות עם החזן הראשי', desc: 'ערב חזנות וזמרה יהודית בהשתתפות מקהלה', tag: 'מופע' },
  { date: '23 סיון', title: 'הילולת הרב המייסד זצ״ל', desc: 'תפילות חגיגיות ומעמד אזכרה', tag: 'הילולה' },
];

const TIMELINE = [
  { year: '1936', title: 'ייסוד בית הכנסת', text: 'קבוצת מתיישבים ותיקים מניחה את אבן הפינה. שם בית הכנסת: "יחד שבטי ישראל" — סמל לאחדות העדות.' },
  { year: '1948', title: 'בית הכנסת בימי העצמאות', text: 'בית הכנסת הופך למרכז רוחני ומקלט קהילתי בימי המלחמה.' },
  { year: '1967', title: 'הרחבה ושיפוץ ראשון', text: 'נוספו עזרת נשים, ספרייה תורנית ואולם שיעורים.' },
  { year: '1985', title: 'שיפוץ הכיפה והויטראז׳ים', text: 'חלונות הויטראז׳ המקוריים משוחזרים ע״י אמן מקומי.' },
  { year: '2008', title: 'חידוש ההיכל', text: 'ארון הקודש המקורי משוחזר, נוספו ספרי תורה חדשים.' },
  { year: '2023', title: '90 שנה לבית הכנסת', text: 'טקס חגיגי בהשתתפות ראש העיר, רבנים ואלפי מתפללים.' },
];

const LEADERS = [
  { name: 'הרב בן־ציון (בנצי) נורדמן שליט״א', role: 'רב בית הכנסת', bio: 'משמש כרב הקהילה ומנהיגה הרוחני, תוך התמקדות בבניין הקהילה וקירוב לבבות.', photo: 'assets/leader-rav-nordman-new.png', photoPosition: '50% 38%', photoScale: 1.08 },
  { name: 'רוני רימר', role: 'יו״ר הנהלת ביהכנ״ס', bio: 'מוביל את ניהול בית הכנסת, אירועים ותחזוקה קהילתית.', photo: 'assets/leader-roni-rimmer-new.png', photoPosition: '50% 42%', photoScale: 1.05 },
  { name: 'מר דוד ביטון', role: 'גבאי ראשי', bio: 'אחראי על סדרי התפילה, עליות לתורה ושיבוץ החזנים.' },
  { name: 'מר יוסף אלמליח', role: 'גזבר', bio: 'מנהל את הכספים, התרומות וקרן ההנצחה של בית הכנסת.' },
];

const MEMORIALS_THIS_MONTH = [
  { name: 'ר׳ מאיר בן יעקב ז״ל', date: 'ג׳ סיון', year: 'תשע״ח' },
  { name: 'מרת רחל בת שלמה ע״ה', date: 'ז׳ סיון', year: 'תש״ף' },
  { name: 'ר׳ שמעון בן אברהם ז״ל', date: 'י״ב סיון', year: 'תשע״ה' },
  { name: 'ר׳ יהודה בן דוד ז״ל', date: 'י״ח סיון', year: 'תשפ״א' },
  { name: 'מרת אסתר בת חיים ע״ה', date: 'כ״ב סיון', year: 'תשע״ט' },
  { name: 'ר׳ אליהו בן יצחק ז״ל', date: 'כ״ח סיון', year: 'תשפ״ב' },
];

const DONATION_TIERS = [
  { amount: 18, label: 'חי', desc: 'זכות בשותפות למצווה' },
  { amount: 54, label: 'ג׳ פעמים חי', desc: 'סיוע להמשך פעילות התורה והתפילה' },
  { amount: 180, label: 'עשר פעמים חי', desc: 'השתתפות בשימור מורשת בית הכנסת' },
  { amount: 360, label: 'עשרים פעמים חי', desc: 'שותפות מרכזית בהמשך פעילות הקהילה' },
  { amount: 1800, label: 'הקדשת יום לימוד', desc: 'הקדשה שלמה ליום לימוד בבית הכנסת' },
];

const DONATION_PURPOSES = [
  { id: 'general', label: 'כללי · תחזוקה שוטפת', icon: 'home' },
  { id: 'torah', label: 'ספר תורה · עליה לתורה', icon: 'book' },
  { id: 'youth', label: 'פעילות נוער ואברכים', icon: 'users' },
  { id: 'renov', label: 'שיפוצים ותחזוקה', icon: 'tool' },
  { id: 'soul', label: 'הנצחה לעילוי נשמה', icon: 'candle' },
];

Object.assign(window, {
  SITE, NAV, PRAYER_WEEK, ZMANIM, EVENTS, TIMELINE,
  LEADERS, MEMORIALS_THIS_MONTH, DONATION_TIERS, DONATION_PURPOSES,
});
