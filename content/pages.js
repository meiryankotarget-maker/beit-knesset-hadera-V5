/* ============================================================
   PER-PAGE SEO METADATA  ·  single source of truth
   ------------------------------------------------------------
   הוספת/עריכת Title ו-Meta Description לכל עמוד סטטי.
   `id`   = מזהה הראוט באפליקציה (תואם ל-PAGES ב-App.jsx)
   `path` = הכתובת הסופית באתר
   ============================================================ */
(function (root, factory) {
  var v = factory();
  if (typeof module === 'object' && module.exports) module.exports = v;
  else root.PAGES_META = v;
})(typeof self !== 'undefined' ? self : this, function () {
  return [
    {
      id: 'home',
      path: '/',
      title: 'בית הכנסת הגדול חדרה · תורה, תפילה וקהילה משנת 1936',
      description:
        'בית הכנסת הגדול בחדרה — מוסד היסטורי משנת 1936, מגדל אור של תורה ותפילה בלב העיר. זמני תפילה, שיעורים, מורשת, אירועים ותרומות.',
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      id: 'about',
      path: '/about',
      title: 'אודות · בית הכנסת הגדול חדרה',
      description:
        'הסיפור של בית הכנסת הגדול בחדרה — חזון הקהילה, ההנהגה הרוחנית, הרב והגבאים, וברוח המסורת שמלווה אותנו מאז שנת תרצ״ו (1936).',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      id: 'times',
      path: '/prayer-times',
      title: 'זמני תפילה וזמני היום · בית הכנסת הגדול חדרה',
      description:
        'זמני שחרית, מנחה וערבית לכל ימות השבוע, זמני כניסת ויציאת שבת וזמני היום (זמנים) לבית הכנסת הגדול בחדרה.',
      changefreq: 'daily',
      priority: '0.9',
    },
    {
      id: 'gallery',
      path: '/gallery',
      title: 'גלריה וזיכרון · בית הכנסת הגדול חדרה',
      description:
        'אוסף תמונות היסטוריות ועכשוויות של בית הכנסת הגדול בחדרה — ארון הקודש, המבנה לאורך השנים ורגעים מחיי הקהילה.',
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      id: 'parasha',
      path: '/פרשת-השבוע',
      title: 'פרשת השבוע · דבר הרב · בית הכנסת הגדול חדרה',
      description:
        'דברי תורה לפרשת השבוע מאת רב בית הכנסת — אסופה שבועית של מחשבה, מוסר ומורשת מבית הכנסת הגדול בחדרה.',
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      id: 'heritage',
      path: '/heritage',
      title: 'מורשת ואדריכלות · בית הכנסת הגדול חדרה',
      description:
        'מורשת בית הכנסת הגדול בחדרה — סיפור הבנייה משנת 1936, האדריכלות, חלונות הויטראז׳, ארון הקודש והשיפוצים לאורך הדורות.',
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      id: 'memorial',
      path: '/memorial',
      title: 'הנצחות וזיכרון · בית הכנסת הגדול חדרה',
      description:
        'קרן ההנצחה וזיכרון יקירי הקהילה בבית הכנסת הגדול בחדרה — הנצחת נשמות, אזכרות ויום השנה בלוח הזיכרון של הקהילה.',
      changefreq: 'monthly',
      priority: '0.6',
    },
    {
      id: 'contact',
      path: '/contact',
      title: 'צור קשר · בית הכנסת הגדול חדרה',
      description:
        'יצירת קשר עם בית הכנסת הגדול בחדרה — כתובת, טלפון, דוא״ל ושעות פעילות המשרד. נשמח לעמוד לרשותכם.',
      changefreq: 'yearly',
      priority: '0.6',
    },
    {
      id: 'donate',
      path: '/donate',
      title: 'תרומות · בית הכנסת הגדול חדרה',
      description:
        'תרמו לבית הכנסת הגדול בחדרה ותסייעו בהחזקת בית הכנסת, השיעורים, האירועים וקרן ההנצחה. כל תרומה מבורכת.',
      changefreq: 'yearly',
      priority: '0.6',
    },
  ];
});
