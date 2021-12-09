'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _addDays = require('date-fns/addDays');
var _addMonths = require('date-fns/addMonths');
var _addWeeks = require('date-fns/addWeeks');
var _differenceInCalendarDays = require('date-fns/differenceInCalendarDays');
var _differenceInDays = require('date-fns/differenceInDays');
var _differenceInMonths = require('date-fns/differenceInMonths');
var _differenceInQuarters = require('date-fns/differenceInQuarters');
var _differenceInWeeks = require('date-fns/differenceInWeeks');
var _differenceInYears = require('date-fns/differenceInYears');
var _eachDayOfInterval = require('date-fns/eachDayOfInterval');
var _endOfISOWeek = require('date-fns/endOfISOWeek');
var _endOfMonth = require('date-fns/endOfMonth');
var _endOfQuarter = require('date-fns/endOfQuarter');
var _endOfWeek = require('date-fns/endOfWeek');
var _endOfYear = require('date-fns/endOfYear');
var _format = require('date-fns/format');
var _formatDistanceToNow = require('date-fns/formatDistanceToNow');
var _getDate = require('date-fns/getDate');
var _getDayOfYear = require('date-fns/getDayOfYear');
var _getDaysInMonth = require('date-fns/getDaysInMonth');
var _getDaysInYear = require('date-fns/getDaysInYear');
var _getISODay = require('date-fns/getISODay');
var _getMonth = require('date-fns/getMonth');
var _getYear = require('date-fns/getYear');
var _isAfter = require('date-fns/isAfter');
var _isBefore = require('date-fns/isBefore');
var _isMonday = require('date-fns/isMonday');
var _isSameDay = require('date-fns/isSameDay');
var _isSameMonth = require('date-fns/isSameMonth');
var _isSunday = require('date-fns/isSunday');
var _isToday = require('date-fns/isToday');
var _isValid = require('date-fns/isValid');
var _isWithinInterval = require('date-fns/isWithinInterval');
var _max = require('date-fns/max');
var _min = require('date-fns/min');
var _parseISO = require('date-fns/parseISO');
var _setDate = require('date-fns/setDate');
var _setDay = require('date-fns/setDay');
var _setISODay = require('date-fns/setISODay');
var _setMonth = require('date-fns/setMonth');
var _startOfISOWeek = require('date-fns/startOfISOWeek');
var _startOfMonth = require('date-fns/startOfMonth');
var _startOfQuarter = require('date-fns/startOfQuarter');
var _startOfWeek = require('date-fns/startOfWeek');
var _startOfYear = require('date-fns/startOfYear');
var _subDays = require('date-fns/subDays');
var _subMonths = require('date-fns/subMonths');
var _subQuarters = require('date-fns/subQuarters');
var _subWeeks = require('date-fns/subWeeks');
var _subYears = require('date-fns/subYears');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _addDays__default = /*#__PURE__*/_interopDefaultLegacy(_addDays);
var _addMonths__default = /*#__PURE__*/_interopDefaultLegacy(_addMonths);
var _addWeeks__default = /*#__PURE__*/_interopDefaultLegacy(_addWeeks);
var _differenceInCalendarDays__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInCalendarDays);
var _differenceInDays__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInDays);
var _differenceInMonths__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInMonths);
var _differenceInQuarters__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInQuarters);
var _differenceInWeeks__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInWeeks);
var _differenceInYears__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInYears);
var _eachDayOfInterval__default = /*#__PURE__*/_interopDefaultLegacy(_eachDayOfInterval);
var _endOfISOWeek__default = /*#__PURE__*/_interopDefaultLegacy(_endOfISOWeek);
var _endOfMonth__default = /*#__PURE__*/_interopDefaultLegacy(_endOfMonth);
var _endOfQuarter__default = /*#__PURE__*/_interopDefaultLegacy(_endOfQuarter);
var _endOfWeek__default = /*#__PURE__*/_interopDefaultLegacy(_endOfWeek);
var _endOfYear__default = /*#__PURE__*/_interopDefaultLegacy(_endOfYear);
var _format__default = /*#__PURE__*/_interopDefaultLegacy(_format);
var _formatDistanceToNow__default = /*#__PURE__*/_interopDefaultLegacy(_formatDistanceToNow);
var _getDate__default = /*#__PURE__*/_interopDefaultLegacy(_getDate);
var _getDayOfYear__default = /*#__PURE__*/_interopDefaultLegacy(_getDayOfYear);
var _getDaysInMonth__default = /*#__PURE__*/_interopDefaultLegacy(_getDaysInMonth);
var _getDaysInYear__default = /*#__PURE__*/_interopDefaultLegacy(_getDaysInYear);
var _getISODay__default = /*#__PURE__*/_interopDefaultLegacy(_getISODay);
var _getMonth__default = /*#__PURE__*/_interopDefaultLegacy(_getMonth);
var _getYear__default = /*#__PURE__*/_interopDefaultLegacy(_getYear);
var _isAfter__default = /*#__PURE__*/_interopDefaultLegacy(_isAfter);
var _isBefore__default = /*#__PURE__*/_interopDefaultLegacy(_isBefore);
var _isMonday__default = /*#__PURE__*/_interopDefaultLegacy(_isMonday);
var _isSameDay__default = /*#__PURE__*/_interopDefaultLegacy(_isSameDay);
var _isSameMonth__default = /*#__PURE__*/_interopDefaultLegacy(_isSameMonth);
var _isSunday__default = /*#__PURE__*/_interopDefaultLegacy(_isSunday);
var _isToday__default = /*#__PURE__*/_interopDefaultLegacy(_isToday);
var _isValid__default = /*#__PURE__*/_interopDefaultLegacy(_isValid);
var _isWithinInterval__default = /*#__PURE__*/_interopDefaultLegacy(_isWithinInterval);
var _max__default = /*#__PURE__*/_interopDefaultLegacy(_max);
var _min__default = /*#__PURE__*/_interopDefaultLegacy(_min);
var _parseISO__default = /*#__PURE__*/_interopDefaultLegacy(_parseISO);
var _setDate__default = /*#__PURE__*/_interopDefaultLegacy(_setDate);
var _setDay__default = /*#__PURE__*/_interopDefaultLegacy(_setDay);
var _setISODay__default = /*#__PURE__*/_interopDefaultLegacy(_setISODay);
var _setMonth__default = /*#__PURE__*/_interopDefaultLegacy(_setMonth);
var _startOfISOWeek__default = /*#__PURE__*/_interopDefaultLegacy(_startOfISOWeek);
var _startOfMonth__default = /*#__PURE__*/_interopDefaultLegacy(_startOfMonth);
var _startOfQuarter__default = /*#__PURE__*/_interopDefaultLegacy(_startOfQuarter);
var _startOfWeek__default = /*#__PURE__*/_interopDefaultLegacy(_startOfWeek);
var _startOfYear__default = /*#__PURE__*/_interopDefaultLegacy(_startOfYear);
var _subDays__default = /*#__PURE__*/_interopDefaultLegacy(_subDays);
var _subMonths__default = /*#__PURE__*/_interopDefaultLegacy(_subMonths);
var _subQuarters__default = /*#__PURE__*/_interopDefaultLegacy(_subQuarters);
var _subWeeks__default = /*#__PURE__*/_interopDefaultLegacy(_subWeeks);
var _subYears__default = /*#__PURE__*/_interopDefaultLegacy(_subYears);

const parseISO = (date, options) => {
  if (typeof date === 'string') {
    return _parseISO__default["default"](date, options);
  }

  return typeof date === 'number' ? new Date(date) : date;
};

const addDays = (date, days) => _addDays__default["default"](parseISO(date), days);

const addMonths = (date, months) => _addMonths__default["default"](parseISO(date), months);

const addWeeks = (date, weeks) => _addWeeks__default["default"](parseISO(date), weeks);

const differenceInCalendarDays = (firstDate, secondDate) => _differenceInCalendarDays__default["default"](parseISO(firstDate), parseISO(secondDate));

const differenceInDays = (firstDate, secondDate) => _differenceInDays__default["default"](parseISO(firstDate), parseISO(secondDate));

const differenceInMonths = (firstDate, secondDate) => _differenceInMonths__default["default"](parseISO(firstDate), parseISO(secondDate));

const differenceInQuarters = (firstDate, secondDate) => _differenceInQuarters__default["default"](parseISO(firstDate), parseISO(secondDate));

const differenceInWeeks = (firstDate, secondDate) => _differenceInWeeks__default["default"](parseISO(firstDate), parseISO(secondDate));

const differenceInYears = (firstDate, secondDate) => _differenceInYears__default["default"](parseISO(firstDate), parseISO(secondDate));

const eachDayOfInterval = (firstDate, lastDate, options) => _eachDayOfInterval__default["default"]({
  start: parseISO(firstDate),
  end: parseISO(lastDate)
}, options);

const endOfISOWeek = date => _endOfISOWeek__default["default"](parseISO(date));

const endOfMonth = date => _endOfMonth__default["default"](parseISO(date));

const endOfQuarter = date => _endOfQuarter__default["default"](parseISO(date));

const endOfWeek = (date, options) => _endOfWeek__default["default"](parseISO(date), options);

const endOfYear = date => _endOfYear__default["default"](parseISO(date));

const format = (date, formatIn, options) => _format__default["default"](parseISO(date), formatIn, options);

const formatDistanceToNow = (date, options) => _formatDistanceToNow__default["default"](parseISO(date), options);

const getDate = date => _getDate__default["default"](parseISO(date));

const getDayOfYear = date => _getDayOfYear__default["default"](parseISO(date));

const getDaysInMonth = date => _getDaysInMonth__default["default"](parseISO(date));

const getDaysInYear = date => _getDaysInYear__default["default"](parseISO(date));

const getISODay = date => _getISODay__default["default"](parseISO(date));

const getMonth = date => _getMonth__default["default"](parseISO(date));

const getYear = date => _getYear__default["default"](parseISO(date));

const isAfter = (firstDate, secondDate) => _isAfter__default["default"](parseISO(firstDate), parseISO(secondDate));

const isBefore = (firstDate, secondDate) => _isBefore__default["default"](parseISO(firstDate), parseISO(secondDate));

const isMonday = date => _isMonday__default["default"](parseISO(date));

const isSameDay = (firstDate, secondDate) => _isSameDay__default["default"](parseISO(firstDate), parseISO(secondDate));

const isSameMonth = (firstDate, secondDate) => _isSameMonth__default["default"](parseISO(firstDate), parseISO(secondDate));

const isSunday = date => _isSunday__default["default"](parseISO(date));

const isToday = date => _isToday__default["default"](parseISO(date));

const isValid = date => _isValid__default["default"](parseISO(date));

const isWithinInterval = (date, startDate, endDate) => _isWithinInterval__default["default"](parseISO(date), {
  start: parseISO(startDate),
  end: parseISO(endDate)
});

const max = dates => _max__default["default"](dates.map(d => parseISO(d)));

const min = dates => _min__default["default"](dates.map(d => parseISO(d)));

const setDate = (date, day) => _setDate__default["default"](parseISO(date), day);

const setDay = (date, day, options) => _setDay__default["default"](parseISO(date), day, options);

const setISODay = (date, day) => _setISODay__default["default"](parseISO(date), day);

const setMonth = (date, month) => _setMonth__default["default"](parseISO(date), month);

const startOfISOWeek = date => _startOfISOWeek__default["default"](parseISO(date));

const startOfMonth = date => _startOfMonth__default["default"](parseISO(date));

const startOfQuarter = date => _startOfQuarter__default["default"](parseISO(date));

const startOfWeek = (date, options) => _startOfWeek__default["default"](parseISO(date), options);

const startOfYear = date => _startOfYear__default["default"](parseISO(date));

const subDays = (date, days) => _subDays__default["default"](parseISO(date), days);

const subMonths = (date, months) => _subMonths__default["default"](parseISO(date), months);

const subQuarters = (date, quarters) => _subQuarters__default["default"](parseISO(date), quarters);

const subWeeks = (date, weeks) => _subWeeks__default["default"](parseISO(date), weeks);

const subYears = (date, years) => _subYears__default["default"](parseISO(date), years);

const formatDate = date => format(date, 'yyyy-MM-dd');

const getSubtractionFn = unit => {
  if (unit === 'year') return subYears;
  if (unit === 'quarter') return subQuarters;
  if (unit === 'month') return subMonths;
  if (unit === 'week') return subWeeks;
  return subDays;
};

const getDiffFn = unit => {
  if (unit === 'year') return differenceInYears;
  if (unit === 'quarter') return differenceInQuarters;
  if (unit === 'month') return differenceInMonths;
  if (unit === 'week') return differenceInWeeks;
  return differenceInDays;
};

const getStartOfFn = unit => {
  if (unit === 'year') return startOfYear;
  if (unit === 'quarter') return startOfQuarter;
  if (unit === 'month') return startOfMonth;
  if (unit === 'week') return startOfISOWeek; // return identity function when unit is day

  return parseISO;
};

const getEndOfFn = unit => {
  if (unit === 'year') return endOfYear;
  if (unit === 'quarter') return endOfQuarter;
  if (unit === 'month') return endOfMonth;
  if (unit === 'week') return endOfISOWeek; // return identity function when unit is day

  return parseISO;
};

const parseTimezoneStrToHours = tz => {
  const [chunk1, chunk2] = tz.split(':');
  const isPositive = chunk1[0] === '+';
  const hours = parseInt(chunk1.slice(1), 10);
  const minutes = parseInt(chunk2, 10);
  const result = hours + minutes / 60;
  return isPositive ? result : -result;
}; // The offset can be either in hours or in seconds. Or it can be a string.


const normalizeOffsetToMs = offset => {
  if (typeof offset !== 'number') return parseTimezoneStrToHours(offset) * 3600 * 1000;
  if (Math.abs(offset) > 15) return offset * 1000; // If the offset looks like seconds

  return offset * 3600 * 1000;
};

const getMsDiffFromUTC = offset => // The getTimezoneOffset retuns minutes
normalizeOffsetToMs(offset) + new Date().getTimezoneOffset() * 60 * 1000; // The offset can be either in hours or in seconds. Or it can be a string.
// Returns a new Date string with the offset applied to it.


const applyOffset = (offset, date) => {
  if (!offset) return parseISO(date);
  const dateObj = date instanceof Date ? date : new Date(date);
  const diffFromUTC = getMsDiffFromUTC(offset);
  return new Date(dateObj.getTime() + diffFromUTC);
};

const formatRange = (start, end) => ({
  start: formatDate(start),
  end: formatDate(end)
});

const getLastRelativePeriodRange = function (num, unit, base) {
  if (base === void 0) {
    base = new Date();
  }

  const startOf = getStartOfFn(unit);
  const endOf = getEndOfFn(unit);
  const sub = getSubtractionFn(unit);
  return formatRange(startOf(sub(base, num)), endOf(sub(base, 1)));
};

const getThisRelativePeriodRange = function (unit, base, num) {
  if (base === void 0) {
    base = new Date();
  }

  if (num === void 0) {
    num = 1;
  }

  const dayBefore = subDays(base, 1);
  const startOf = getStartOfFn(unit);
  const sub = getSubtractionFn(unit);
  return formatRange(startOf(sub(dayBefore, num - 1)), formatDate(dayBefore));
};

const getTillYesterdayRange = function (start, base) {
  if (base === void 0) {
    base = new Date();
  }

  const dayBefore = subDays(base, 1);
  return formatRange(start, dayBefore);
};

const getUnit = value => {
  switch (value) {
    case 'day':
    case 'week':
    case 'month':
    case 'quarter':
    case 'year':
      return value;

    default:
      throw new Error('Unexpected unit');
  }
};

const getPeriodParams = period => {
  const LAST_RANGE_REGEX_1 = /^last_(day|week|month|quarter|year)(_including_current)?$/;
  const LAST_RANGE_REGEX_2 = /^last_(\d+)_(day|week|month|quarter|year)s?(_including_current)?$/;
  const THIS_RANGE_REGEX = /^this_(day|week|month|quarter|year)$/;
  const TILL_YESTERDAY_REGEX = /^(\d{4}-\d{2}-\d{2})_to_yesterday$/;
  const CUSTOM_REGEX = /^(\d{4}-\d{2}-\d{2})_to_(\d{4}-\d{2}-\d{2})$/;
  let match = period.match(LAST_RANGE_REGEX_1);

  if (match) {
    return {
      type: 'last',
      num: 1,
      unit: getUnit(match[1]),
      including_current: match[2] === '_including_current',
      includingParam: 'this'
    };
  }

  match = period.match(LAST_RANGE_REGEX_2);

  if (match) {
    return {
      type: 'last',
      num: Number(match[1]),
      unit: getUnit(match[2]),
      including_current: match[3] === '_including_current',
      includingParam: match[2] === 'day' ? 'today' : `this ${match[2]}`
    };
  }

  match = period.match(THIS_RANGE_REGEX);
  if (match) return {
    type: 'this',
    unit: getUnit(match[1])
  };
  match = period.match(TILL_YESTERDAY_REGEX);
  if (match) return {
    type: 'till_yesterday',
    start: match[1]
  };
  match = period.match(CUSTOM_REGEX);
  if (match) return {
    type: 'custom',
    start: match[1],
    end: match[2]
  };

  switch (period) {
    case 'yesterday':
      return {
        type: 'yesterday'
      };

    case 'all_time':
      return {
        type: 'all_time'
      };

    default:
      throw new Error(`Unrecognized date range: ${period}`);
  }
};

const getRange = function (period, base, utcOffset) {
  if (base === void 0) {
    base = new Date();
  }

  if (utcOffset === void 0) {
    utcOffset = 0;
  }

  const baseDate = applyOffset(utcOffset, base);
  const params = getPeriodParams(period);

  switch (params.type) {
    case 'last':
      {
        const {
          unit,
          num
        } = params;

        if (params.including_current) {
          return getThisRelativePeriodRange(unit, baseDate, num);
        }

        return getLastRelativePeriodRange(num, unit, baseDate);
      }

    case 'this':
      return getThisRelativePeriodRange(params.unit, baseDate);

    case 'till_yesterday':
      return getTillYesterdayRange(applyOffset(utcOffset, params.start), baseDate);

    case 'yesterday':
      return getThisRelativePeriodRange('day', baseDate);

    case 'all_time':
      // arbritary start in 2015
      return getTillYesterdayRange(new Date('2015-01-01'), baseDate);

    case 'custom':
      return formatRange(applyOffset(utcOffset, params.start), applyOffset(utcOffset, params.end));

    default:
      throw new Error(`Unrecognized date range: ${period}`);
  }
};

const getBestCompareUnit = (start, end) => {
  if (getDayOfYear(start) === 1 && getDayOfYear(end) === getDaysInYear(end)) {
    return 'year';
  }

  const startOfQuarter = getStartOfFn('quarter');
  const endOfQuarter = getEndOfFn('quarter');

  if (isSameDay(startOfQuarter(start), start) && isSameDay(endOfQuarter(end), end)) {
    return 'quarter';
  }

  if (getDate(start) === 1 && getDate(end) === getDaysInMonth(end)) {
    return 'month';
  }

  if (isMonday(start) && isSunday(end)) {
    return 'week';
  }

  return 'day';
};

const getAutoCompareRangeAndLabel = function (period, baseDate) {
  if (baseDate === void 0) {
    baseDate = new Date();
  }

  const {
    start,
    end
  } = getRange(period, baseDate);
  const params = getPeriodParams(period);

  switch (params.type) {
    case 'last':
      {
        const subtract = getSubtractionFn(params.unit);
        return {
          label: `Previous ${params.num} ${params.unit}`,
          range: formatRange(subtract(start, params.num), subDays(start, 1))
        };
      }

    case 'this':
      {
        const subtract = getSubtractionFn(params.unit);
        return {
          label: `Previous ${params.unit}`,
          range: formatRange(subtract(start, 1), subDays(start, 1))
        };
      }

    case 'yesterday':
      return {
        label: 'Previous Day',
        range: formatRange(subDays(start, 1), subDays(start, 1))
      };

    default:
      {
        const compareUnit = getBestCompareUnit(start, end);
        const subtract = getSubtractionFn(compareUnit);
        const diffFn = getDiffFn(compareUnit);
        const compareStart = subtract(start, diffFn(end, start) + 1);
        const compareEnd = subDays(start, 1);
        return {
          label: 'Previous Period',
          range: formatRange(compareStart, compareEnd)
        };
      }
  }
};

const getCompareRange = function (period, compareMode) {
  if (compareMode === void 0) {
    compareMode = 'auto';
  }

  switch (compareMode) {
    case 'auto':
      return getAutoCompareRangeAndLabel(period).range;

    case '12_months_ago':
      {
        // For 12 month comparison, we compare with same period length
        const {
          start,
          end
        } = getRange(period);
        return formatRange(subYears(start, 1), subYears(end, 1));
      }

    default:
      return getRange(compareMode);
  }
};

const getTillYesterdayPeriod = date => `${formatDate(date)}_to_yesterday`;

const getCustomPeriod = (start, end) => `${formatDate(start)}_to_${formatDate(end)}`;

const getLastPeriod = (num, unit, includingCurrent) => {
  const suffix = `${unit}${includingCurrent ? '_including_current' : ''}`;

  if (num === 1) {
    return `last_${suffix}`;
  }

  return `last_${num}_${suffix}`;
};

const getThisPeriod = unit => `this_${unit}`;

const migrateLegacyPeriod = period => {
  if (typeof period !== 'string') {
    // a range is provided, this is legacy way to handle custom periods
    return getCustomPeriod(period.start, period.end);
  }

  const LAST_RANGE_REGEX_LEGACY = /^last(\d+)(day|week|month|quarter|year)s?$/;
  const matchLegacyFormat = period.match(LAST_RANGE_REGEX_LEGACY);

  if (matchLegacyFormat) {
    return `last_${matchLegacyFormat[1]}_${matchLegacyFormat[2]}`;
  } // last_x_days_including current is deprecated


  const LAST_RANGE_REGEX = /^(last_(\d+)_days?)_including_current$/;
  const matchIncludingCurrentDay = period.match(LAST_RANGE_REGEX);

  if (matchIncludingCurrentDay) {
    return matchIncludingCurrentDay[1];
  }

  switch (period) {
    case 'today':
      return 'yesterday';

    case 'year_to_date':
      return 'this_year';

    default:
      return period;
  }
};

const migrateLegacyCompareMode = function (compareMode) {
  if (compareMode === void 0) {
    compareMode = 'auto';
  }

  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;

    default:
      // in that case compareMode is actually a range
      return migrateLegacyPeriod(compareMode);
  }
};

const toLegacyPeriod = period => {
  const {
    type
  } = getPeriodParams(period);
  return type === 'custom' ? getRange(period) : period;
};

const toLegacyCompareMode = compareMode => {
  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;

    default:
      return toLegacyPeriod(compareMode);
  }
};

const retrievePeriod = function (period, base, offset) {
  if (base === void 0) {
    base = new Date();
  }

  if (offset === void 0) {
    offset = 0;
  }

  return getRange(migrateLegacyPeriod(period), base, offset);
};

const retrievePeriodParams = period => getPeriodParams(migrateLegacyPeriod(period));

const retrieveComparePeriod = function (period, compareMode) {
  if (compareMode === void 0) {
    compareMode = 'auto';
  }

  return getCompareRange(migrateLegacyPeriod(period), migrateLegacyCompareMode(compareMode));
};

const calculateAutoCompare = function (period, base) {
  if (base === void 0) {
    base = new Date();
  }

  const {
    label,
    range
  } = getAutoCompareRangeAndLabel(migrateLegacyPeriod(period), base);
  return {
    label,
    period: range
  };
};

exports.addDays = addDays;
exports.addMonths = addMonths;
exports.addWeeks = addWeeks;
exports.calculateAutoCompare = calculateAutoCompare;
exports.differenceInCalendarDays = differenceInCalendarDays;
exports.differenceInDays = differenceInDays;
exports.differenceInMonths = differenceInMonths;
exports.differenceInQuarters = differenceInQuarters;
exports.differenceInWeeks = differenceInWeeks;
exports.differenceInYears = differenceInYears;
exports.eachDayOfInterval = eachDayOfInterval;
exports.endOfISOWeek = endOfISOWeek;
exports.endOfMonth = endOfMonth;
exports.endOfQuarter = endOfQuarter;
exports.endOfWeek = endOfWeek;
exports.endOfYear = endOfYear;
exports.format = format;
exports.formatDate = formatDate;
exports.formatDistanceToNow = formatDistanceToNow;
exports.getAutoCompareRangeAndLabel = getAutoCompareRangeAndLabel;
exports.getCompareRange = getCompareRange;
exports.getCustomPeriod = getCustomPeriod;
exports.getDate = getDate;
exports.getDayOfYear = getDayOfYear;
exports.getDaysInMonth = getDaysInMonth;
exports.getDaysInYear = getDaysInYear;
exports.getISODay = getISODay;
exports.getLastPeriod = getLastPeriod;
exports.getMonth = getMonth;
exports.getPeriodParams = getPeriodParams;
exports.getRange = getRange;
exports.getThisPeriod = getThisPeriod;
exports.getTillYesterdayPeriod = getTillYesterdayPeriod;
exports.getYear = getYear;
exports.isAfter = isAfter;
exports.isBefore = isBefore;
exports.isMonday = isMonday;
exports.isSameDay = isSameDay;
exports.isSameMonth = isSameMonth;
exports.isSunday = isSunday;
exports.isToday = isToday;
exports.isValid = isValid;
exports.isWithinInterval = isWithinInterval;
exports.max = max;
exports.migrateLegacyCompareMode = migrateLegacyCompareMode;
exports.migrateLegacyPeriod = migrateLegacyPeriod;
exports.min = min;
exports.parseISO = parseISO;
exports.retrieveComparePeriod = retrieveComparePeriod;
exports.retrievePeriod = retrievePeriod;
exports.retrievePeriodParams = retrievePeriodParams;
exports.setDate = setDate;
exports.setDay = setDay;
exports.setISODay = setISODay;
exports.setMonth = setMonth;
exports.startOfISOWeek = startOfISOWeek;
exports.startOfMonth = startOfMonth;
exports.startOfQuarter = startOfQuarter;
exports.startOfWeek = startOfWeek;
exports.startOfYear = startOfYear;
exports.subDays = subDays;
exports.subMonths = subMonths;
exports.subQuarters = subQuarters;
exports.subWeeks = subWeeks;
exports.subYears = subYears;
exports.toLegacyCompareMode = toLegacyCompareMode;
exports.toLegacyPeriod = toLegacyPeriod;
