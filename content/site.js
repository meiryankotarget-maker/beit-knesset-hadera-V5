/* ============================================================
   SITE-LEVEL SEO CONFIG  ·  single source of truth
   ------------------------------------------------------------
   Works in the browser (sets window.SITE_SEO) AND in Node
   (module.exports) so the runtime app and the build script
   (build-seo.cjs) read EXACTLY the same values.

   ►► עדכון דומיין: כשיהיה דומיין סופי, עדכן רק את השדה `url`
      כאן למטה (למשל 'https://hagadol-hadera.org.il').
      כל ה-canonical, OG, sitemap.xml ו-robots.txt יתעדכנו
      אוטומטית בבנייה הבאה. אין צורך לגעת בשום מקום אחר.
   ============================================================ */
(function (root, factory) {
  var v = factory();
  if (typeof module === 'object' && module.exports) module.exports = v;
  else root.SITE_SEO = v;
})(typeof self !== 'undefined' ? self : this, function () {
  return {
    /* ▼▼ עדכן כאן כשיהיה דומיין סופי (ללא לוכסן בסוף) ▼▼ */
    url: '',
    /* ▲▲ לדוגמה: 'https://hagadol-hadera.org.il' ▲▲ */

    name: 'בית הכנסת הגדול חדרה',
    shortName: 'בית הכנסת הגדול',
    locale: 'he_IL',
    lang: 'he',
    dir: 'rtl',

    /* תמונת ברירת מחדל לשיתוף (Open Graph / Twitter) */
    defaultImage: '/assets/hero-building.png',

    /* פרטי הארגון — לשימוש ב-Structured Data (JSON-LD) */
    org: {
      type: 'PlaceOfWorship',
      foundingDate: '1936',
      streetAddress: 'הגיבורים 74',
      addressLocality: 'חדרה',
      addressCountry: 'IL',
      telephone: '04-633-4512',
      email: 'info@hagadol-hadera.org.il',
    },

    /* ברירת מחדל לעמוד הבית / fallback */
    defaultTitle: 'בית הכנסת הגדול חדרה · מגדל אור של תורה ותפילה בלב העיר',
    defaultDescription:
      'בית הכנסת הגדול בחדרה — מוסד היסטורי משנת 1936. זמני תפילה, גלריה ומורשת, דבר הרב לפרשת השבוע, הנצחות ותרומות.',
  };
});
