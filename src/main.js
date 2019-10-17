import getDate from 'date-fns/get_date';
import getDaysInMonth from 'date-fns/get_days_in_month';
import getDaysInYear from 'date-fns/get_days_in_year';
import getDayOfYear from 'date-fns/get_day_of_year';
import isMonday from 'date-fns/is_monday';
import isSameDay from 'date-fns/is_same_day';
import isSunday from 'date-fns/is_sunday';
import subDays from 'date-fns/sub_days';
import subYears from 'date-fns/sub_years';
import { applyOffset, formatDate, getDiffFn, getEndOfFn, getStartOfFn, getSubtractionFn } from './utils';

// :: (Date | Int | String) -> (Date | Int | String)  -> Object
const formatRange = (start, end) => ({
  start: formatDate(start),
  end: formatDate(end),
});

// :: Int -> String -> Option(Date | Int | String) = new Date() -> Object
const getLastRelativePeriodRange = (num, unit, base = new Date()) => {
  const startOf = getStartOfFn(unit);
  const endOf = getEndOfFn(unit);
  const sub = getSubtractionFn(unit);

  return formatRange(startOf(sub(base, num)), endOf(sub(base, 1)));
};

// :: String -> Option(Date | Int | String) = new Date() -> Object
const getThisRelativePeriodRange = (unit, base = new Date(), num = 1) => {
  const dayBefore = subDays(base, 1);

  const startOf = getStartOfFn(unit);
  const sub = getSubtractionFn(unit);

  return formatRange(startOf(sub(dayBefore, num - 1)), formatDate(dayBefore));
};

// :: (Date | Int | String) -> Option(Date | Int | String) = new Date() -> Object
const getTillYesterdayRange = (start, base = new Date()) => {
  const dayBefore = subDays(base, 1);

  return formatRange(start, dayBefore);
};

// :: String -> Object
const getPeriodParams = (period) => {
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
      unit: match[1],
      including_current: match[2] === '_including_current',
      includingParam: 'this',
    };
  }

  match = period.match(LAST_RANGE_REGEX_2);
  if (match) {
    return {
      type: 'last',
      num: Number(match[1]),
      unit: match[2],
      including_current: match[3] === '_including_current',
      includingParam: match[2] === 'day' ? 'today' : `this ${match[2]}`,
    };
  }

  match = period.match(THIS_RANGE_REGEX);
  if (match) return { type: 'this', unit: match[1] };

  match = period.match(TILL_YESTERDAY_REGEX);
  if (match) return { type: 'till_yesterday', start: match[1] };

  match = period.match(CUSTOM_REGEX);
  if (match) return { type: 'custom', start: match[1], end: match[2] };

  switch (period) {
    case 'yesterday':
      return { type: 'yesterday' };
    case 'all_time':
      return { type: 'all_time' };
    default:
      throw new Error(`Unrecognized date range: ${period}`);
  }
};

// :: (String) -> Option(Date | Int | String) -> Option(Int) = 0 -> Object
const getRange = (period, base = new Date(), utcOffset = 0) => {
  const baseDate = applyOffset(utcOffset, base);

  const params = getPeriodParams(period);

  switch (params.type) {
    case 'last': {
      const { unit, num } = params;

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
      return formatRange(
        applyOffset(utcOffset, params.start),
        applyOffset(utcOffset, params.end),
      );
    default:
      throw new Error(`Unrecognized date range: ${period}`);
  }
};

// :: (Date | Int | String) -> (Date | Int | String) -> String
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

// :: (String) -> Option(Date | Int | String) = new Date() -> Object
const getAutoCompareRangeAndLabel = (period, baseDate = new Date()) => {
  const { start, end } = getRange(period, baseDate);
  const params = getPeriodParams(period);

  switch (params.type) {
    case 'last': {
      const subtract = getSubtractionFn(params.unit);
      return {
        label: `Previous ${params.num} ${params.unit}`,
        range: formatRange(
          subtract(start, params.num),
          subDays(start, 1),
        ),
      };
    }
    case 'this': {
      const subtract = getSubtractionFn(params.unit);
      return {
        label: `Previous ${params.unit}`,
        range: formatRange(
          subtract(start, 1),
          subDays(start, 1),
        ),
      };
    }
    case 'yesterday':
      return {
        label: 'Previous Day',
        range: formatRange(
          subDays(start, 1),
          subDays(start, 1),
        ),
      };
    default: {
      const compareUnit = getBestCompareUnit(start, end);
      const subtract = getSubtractionFn(compareUnit);
      const diffFn = getDiffFn(compareUnit);

      const compareStart = subtract(start, diffFn(end, start) + 1);
      const compareEnd = subDays(start, 1);

      return {
        label: 'Previous Period',
        range: formatRange(compareStart, compareEnd),
      };
    }
  }
};

// :: String -> Option(String) = 'auto' -> Object
const getCompareRange = (period, compareMode = 'auto') => {
  switch (compareMode) {
    case 'auto':
      return getAutoCompareRangeAndLabel(period).range;
    case '12_months_ago': {
      // For 12 month comparison, we compare with same period length
      const { start, end } = getRange(period);
      return formatRange(subYears(start, 1), subYears(end, 1));
    }
    default:
      return getRange(compareMode);
  }
};

// :: (Date | Int | String) -> String
const getTillYesterdayPeriod = date => `${formatDate(date)}_to_yesterday`;

// :: (Date | Int | String) -> (Date | Int | String) -> String
const getCustomPeriod = (start, end) => `${formatDate(start)}_to_${formatDate(end)}`;

// :: Int -> String -> Boolean -> String
const getLastPeriod = (num, unit, includingCurrent) => {
  const suffix = `${unit}${includingCurrent ? '_including_current' : ''}`;

  if (num === 1) {
    return `last_${suffix}`;
  }

  return `last_${num}_${suffix}`;
};

// :: String -> String
const getThisPeriod = unit => `this_${unit}`;

export {
  getRange,
  getPeriodParams,
  getCompareRange,
  getAutoCompareRangeAndLabel,
  getTillYesterdayPeriod,
  getCustomPeriod,
  getLastPeriod,
  getThisPeriod,
};
