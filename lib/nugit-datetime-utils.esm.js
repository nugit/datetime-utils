import _addDays from 'date-fns/addDays';
import _addMonths from 'date-fns/addMonths';
import _addWeeks from 'date-fns/addWeeks';
import _differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import _differenceInDays from 'date-fns/differenceInDays';
import _differenceInMonths from 'date-fns/differenceInMonths';
import _differenceInQuarters from 'date-fns/differenceInQuarters';
import _differenceInWeeks from 'date-fns/differenceInWeeks';
import _differenceInYears from 'date-fns/differenceInYears';
import _eachDayOfInterval from 'date-fns/eachDayOfInterval';
import _endOfISOWeek from 'date-fns/endOfISOWeek';
import _endOfMonth from 'date-fns/endOfMonth';
import _endOfQuarter from 'date-fns/endOfQuarter';
import _endOfWeek from 'date-fns/endOfWeek';
import _endOfYear from 'date-fns/endOfYear';
import _format from 'date-fns/format';
import _formatDistanceToNow from 'date-fns/formatDistanceToNow';
import _getDate from 'date-fns/getDate';
import _getDayOfYear from 'date-fns/getDayOfYear';
import _getDaysInMonth from 'date-fns/getDaysInMonth';
import _getDaysInYear from 'date-fns/getDaysInYear';
import _getISODay from 'date-fns/getISODay';
import _getMonth from 'date-fns/getMonth';
import _getYear from 'date-fns/getYear';
import _isAfter from 'date-fns/isAfter';
import _isBefore from 'date-fns/isBefore';
import _isMonday from 'date-fns/isMonday';
import _isSameDay from 'date-fns/isSameDay';
import _isSameMonth from 'date-fns/isSameMonth';
import _isSunday from 'date-fns/isSunday';
import _isToday from 'date-fns/isToday';
import _isValid from 'date-fns/isValid';
import _isWithinInterval from 'date-fns/isWithinInterval';
import _max from 'date-fns/max';
import _min from 'date-fns/min';
import _parseISO from 'date-fns/parseISO';
import _setDate from 'date-fns/setDate';
import _setDay from 'date-fns/setDay';
import _setISODay from 'date-fns/setISODay';
import _setMonth from 'date-fns/setMonth';
import _startOfISOWeek from 'date-fns/startOfISOWeek';
import _startOfMonth from 'date-fns/startOfMonth';
import _startOfQuarter from 'date-fns/startOfQuarter';
import _startOfWeek from 'date-fns/startOfWeek';
import _startOfYear from 'date-fns/startOfYear';
import _subDays from 'date-fns/subDays';
import _subMonths from 'date-fns/subMonths';
import _subQuarters from 'date-fns/subQuarters';
import _subWeeks from 'date-fns/subWeeks';
import _subYears from 'date-fns/subYears';

const parseISO = (date, options) => {
  if (typeof date === 'string') {
    return _parseISO(date, options);
  }

  return typeof date === 'number' ? new Date(date) : date;
};

const addDays = (date, days) => _addDays(parseISO(date), days);

const addMonths = (date, months) => _addMonths(parseISO(date), months);

const addWeeks = (date, weeks) => _addWeeks(parseISO(date), weeks);

const differenceInCalendarDays = (firstDate, secondDate) => _differenceInCalendarDays(parseISO(firstDate), parseISO(secondDate));

const differenceInDays = (firstDate, secondDate) => _differenceInDays(parseISO(firstDate), parseISO(secondDate));

const differenceInMonths = (firstDate, secondDate) => _differenceInMonths(parseISO(firstDate), parseISO(secondDate));

const differenceInQuarters = (firstDate, secondDate) => _differenceInQuarters(parseISO(firstDate), parseISO(secondDate));

const differenceInWeeks = (firstDate, secondDate) => _differenceInWeeks(parseISO(firstDate), parseISO(secondDate));

const differenceInYears = (firstDate, secondDate) => _differenceInYears(parseISO(firstDate), parseISO(secondDate));

const eachDayOfInterval = (firstDate, lastDate, options) => _eachDayOfInterval({
  start: parseISO(firstDate),
  end: parseISO(lastDate)
}, options);

const endOfISOWeek = date => _endOfISOWeek(parseISO(date));

const endOfMonth = date => _endOfMonth(parseISO(date));

const endOfQuarter = date => _endOfQuarter(parseISO(date));

const endOfWeek = (date, options) => _endOfWeek(parseISO(date), options);

const endOfYear = date => _endOfYear(parseISO(date));

const format = (date, formatIn, options) => _format(parseISO(date), formatIn, options);

const formatDistanceToNow = (date, options) => _formatDistanceToNow(parseISO(date), options);

const getDate = date => _getDate(parseISO(date));

const getDayOfYear = date => _getDayOfYear(parseISO(date));

const getDaysInMonth = date => _getDaysInMonth(parseISO(date));

const getDaysInYear = date => _getDaysInYear(parseISO(date));

const getISODay = date => _getISODay(parseISO(date));

const getMonth = date => _getMonth(parseISO(date));

const getYear = date => _getYear(parseISO(date));

const isAfter = (firstDate, secondDate) => _isAfter(parseISO(firstDate), parseISO(secondDate));

const isBefore = (firstDate, secondDate) => _isBefore(parseISO(firstDate), parseISO(secondDate));

const isMonday = date => _isMonday(parseISO(date));

const isSameDay = (firstDate, secondDate) => _isSameDay(parseISO(firstDate), parseISO(secondDate));

const isSameMonth = (firstDate, secondDate) => _isSameMonth(parseISO(firstDate), parseISO(secondDate));

const isSunday = date => _isSunday(parseISO(date));

const isToday = date => _isToday(parseISO(date));

const isValid = date => _isValid(parseISO(date));

const isWithinInterval = (date, startDate, endDate) => _isWithinInterval(parseISO(date), {
  start: parseISO(startDate),
  end: parseISO(endDate)
});

const max = dates => _max(dates.map(d => parseISO(d)));

const min = dates => _min(dates.map(d => parseISO(d)));

const setDate = (date, day) => _setDate(parseISO(date), day);

const setDay = (date, day, options) => _setDay(parseISO(date), day, options);

const setISODay = (date, day) => _setISODay(parseISO(date), day);

const setMonth = (date, month) => _setMonth(parseISO(date), month);

const startOfISOWeek = date => _startOfISOWeek(parseISO(date));

const startOfMonth = date => _startOfMonth(parseISO(date));

const startOfQuarter = date => _startOfQuarter(parseISO(date));

const startOfWeek = (date, options) => _startOfWeek(parseISO(date), options);

const startOfYear = date => _startOfYear(parseISO(date));

const subDays = (date, days) => _subDays(parseISO(date), days);

const subMonths = (date, months) => _subMonths(parseISO(date), months);

const subQuarters = (date, quarters) => _subQuarters(parseISO(date), quarters);

const subWeeks = (date, weeks) => _subWeeks(parseISO(date), weeks);

const subYears = (date, years) => _subYears(parseISO(date), years);

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

export { addDays, addMonths, addWeeks, calculateAutoCompare, differenceInCalendarDays, differenceInDays, differenceInMonths, differenceInQuarters, differenceInWeeks, differenceInYears, eachDayOfInterval, endOfISOWeek, endOfMonth, endOfQuarter, endOfWeek, endOfYear, format, formatDate, formatDistanceToNow, getAutoCompareRangeAndLabel, getCompareRange, getCustomPeriod, getDate, getDayOfYear, getDaysInMonth, getDaysInYear, getISODay, getLastPeriod, getMonth, getPeriodParams, getRange, getThisPeriod, getTillYesterdayPeriod, getYear, isAfter, isBefore, isMonday, isSameDay, isSameMonth, isSunday, isToday, isValid, isWithinInterval, max, migrateLegacyCompareMode, migrateLegacyPeriod, min, parseISO, retrieveComparePeriod, retrievePeriod, retrievePeriodParams, setDate, setDay, setISODay, setMonth, startOfISOWeek, startOfMonth, startOfQuarter, startOfWeek, startOfYear, subDays, subMonths, subQuarters, subWeeks, subYears, toLegacyCompareMode, toLegacyPeriod };
