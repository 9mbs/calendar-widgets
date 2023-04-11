import {Locale} from './types';

export const locale: Locale = {
  locale: 'الإنجليزية (الولايات المتحدة الأمريكية)',
  daysOfWeek: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  daysOfWeekFull: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  monthsFull: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  monthsShort: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
  today: 'اليوم',
  clear: 'مسح',
  close: 'إغلاق',
  firstDay: 0,
  labelMonthNext: 'الشهر القادم',
  labelMonthPrev: 'الشهر السابق',
  labelMonthSelect: 'حدد شهرًا',
  labelYearSelect: 'حدد عامًا',
  errorMonth: 'شهر غير صالح. يجب أن يكون الشهر بين 1 و 12.',
  errorYear: 'عام غير صالح. يجب أن يكون العام بين 1900 و 2100.',
  errorDay: 'يوم غير صالح. يجب أن يكون اليوم بين 1 و 31.',
  errorLocale: 'إعدادات المنطقة غير صالحة. يجب أن تكون إعدادات المنطقة سلسلة. على سبيل المثال: "ar-SA".',
  errorOptions: 'خيارات غير صالحة. يجب أن تكون الخيارات كائنًا. راجع https://developer.mozilla.org/ar/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString للحصول على مزيد من المعلومات.'
};
