import { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import { TimeViewWithMeridiem } from '../internals/models';

const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'saat',
  minutes: 'dakika',
  seconds: 'saniye',
  meridiem: 'öğleden sonra',
};

const trTRPickers: Partial<PickersLocaleText<any>> = {
  // Calendar navigation
  previousMonth: 'Önceki ay',
  nextMonth: 'Sonraki ay',

  // View navigation
  openPreviousView: 'Sonraki görünüm',
  openNextView: 'Önceki görünüm',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    view === 'year'
      ? 'yıl görünümü açık, takvim görünümüne geç'
      : 'takvim görünümü açık, yıl görünümüne geç',

  // DateRange labels
  start: 'Başlangıç',
  end: 'Bitiş',
  startDate: 'Başlangıç tarihi',
  startTime: 'Başlangıç saati',
  endDate: 'Bitiş tarihi',
  endTime: 'Bitiş saati',

  // Action bar
  cancelButtonLabel: 'iptal',
  clearButtonLabel: 'Temizle',
  okButtonLabel: 'Tamam',
  todayButtonLabel: 'Bugün',

  // Toolbar titles
  datePickerToolbarTitle: 'Tarih Seç',
  dateTimePickerToolbarTitle: 'Tarih & Saat seç',
  timePickerToolbarTitle: 'Saat seç',
  dateRangePickerToolbarTitle: 'Tarih aralığı seçin',

  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) =>
    `${timeViews[view]} seç.  ${!formattedTime && (time === null || !utils.isValid(time)) ? 'Zaman seçilmedi' : `Seçilen zaman: ${formattedTime ?? utils.format(time, 'fullTime')}`}`,
  hoursClockNumberText: (hours) => `${hours} saat`,
  minutesClockNumberText: (minutes) => `${minutes} dakika`,
  secondsClockNumberText: (seconds) => `${seconds} saniye`,

  // Digital clock labels
  selectViewText: (view) => `Seç ${timeViews[view]}`,

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Hafta numarası',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => `Hafta ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,

  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) =>
    formattedDate || (value !== null && utils.isValid(value))
      ? `Tarih seçin, seçilen tarih: ${formattedDate ?? utils.format(value, 'fullDate')}`
      : 'Tarih seç',
  openTimePickerDialogue: (value, utils, formattedTime) =>
    formattedTime || (value !== null && utils.isValid(value))
      ? `Saat seçin, seçilen saat: ${formattedTime ?? utils.format(value, 'fullTime')}`
      : 'Saat seç',
  fieldClearLabel: 'Temizle',

  // Table labels
  timeTableLabel: 'saat seç',
  dateTableLabel: 'tarih seç',

  // Field section placeholders
  fieldYearPlaceholder: (params) => 'Y'.repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => (params.contentType === 'letter' ? 'AAA' : 'AA'),
  fieldDayPlaceholder: () => 'GG',
  fieldWeekDayPlaceholder: (params) => (params.contentType === 'letter' ? 'HHH' : 'HH'),
  fieldHoursPlaceholder: () => 'ss',
  fieldMinutesPlaceholder: () => 'dd',
  fieldSecondsPlaceholder: () => 'ss',
  fieldMeridiemPlaceholder: () => 'aa',

  // View names
  year: 'Yıl',
  month: 'Ay',
  day: 'Gün',
  weekDay: 'Haftanın Günü',
  hours: 'Saatler',
  minutes: 'Dakikalar',
  seconds: 'Saniyeler',
  meridiem: 'Öğleden Önce/Sonra',

  // Common
  empty: 'Boş',
};

export const trTR = getPickersLocalization(trTRPickers);
