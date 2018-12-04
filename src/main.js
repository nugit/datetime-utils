import addDays from 'date-fns/add_days';
import differenceInDays from 'date-fns/difference_in_days';
import getDate from 'date-fns/get_date';
import getDayOfYear from 'date-fns/get_day_of_year';
import getMonth from 'date-fns/get_month';
import getYear from 'date-fns/get_year';
import subDays from 'date-fns/sub_days';
import subMonths from 'date-fns/sub_months';
import subYears from 'date-fns/sub_years';
import { applyOffset, formatDate, getSubtractionFn, getStartOfFn, getEndOfFn } from './utils';
import { convertLegacyParams, migrateLegacyPeriodString } from './legacy';

// :: Int -> String -> Option(String) -> Object
function retrieveLastRelativePeriod(num, unit, base = Date()) {
  const startOf = getStartOfFn(unit);
  const endOf = getEndOfFn(unit);
  const sub = getSubtractionFn(unit);

  return {
    start: formatDate(startOf(sub(base, num))),
    end: formatDate(endOf(sub(base, 1))),
  };
}

// :: String -> Option(String) -> Object
function retrieveThisRelativePeriod(unit, base = Date(), num = 1) {
  const dayBefore = subDays(base, 1);

  const startOf = getStartOfFn(unit);
  const sub = getSubtractionFn(unit);

  return {
    start: formatDate(startOf(sub(dayBefore, num - 1))),
    end: formatDate(dayBefore),
  };
}

function retrieveTillYesterday(start, base = Date()) {
  const dayBefore = subDays(base, 1);

  return {
    start: formatDate(start),
    end: formatDate(dayBefore),
  };
}

// :: String -> Option(String) -> Object
function retrievePredefinedDateRange(key, base = Date()) {
  switch (key) {
    case 'yesterday':
      return retrieveThisRelativePeriod('day', base);
    case 'all_time':
      // arbritary start in 2015
      return retrieveTillYesterday(Date('2015-01-01'), base);
    default:
      throw new Error(`Unrecognized date range: ${key}`);
  }
}

// :: (Object | String) -> Object
function retrievePeriodParams(periodOrKey) {
  if (typeof periodOrKey !== 'string') return periodOrKey;

  const LAST_RANGE_REGEX_1 = /^last_(day|week|month|quarter|year)(_including_current)?$/;
  const LAST_RANGE_REGEX_2 = /^last_(\d+)_(day|week|month|quarter|year)s?(_including_current)?$/;
  const THIS_RANGE_REGEX = /^this_(day|week|month|quarter|year)$/;
  const TILL_YESTERDAY_REGEX = /^(\d{4}-\d{2}-\d{2})_to_yesterday$/;
  const CUSTOM_REGEX = /^(\d{4}-\d{2}-\d{2})_to_(\d{4}-\d{2}-\d{2})$/;

  let match = periodOrKey.match(LAST_RANGE_REGEX_1);
  if (match) {
    return {
      type: 'last',
      num: 1,
      unit: match[1],
      including_current: match[2] === '_including_current',
      includeingParam: match[1] === 'day' ? 'today' : 'this',
    };
  }

  match = periodOrKey.match(LAST_RANGE_REGEX_2);
  if (match) {
    return {
      type: 'last',
      num: Number(match[1]),
      unit: match[2],
      including_current: match[3] === '_including_current',
      includeingParam: match[2] === 'day' ? 'today' : `this ${match[2]}`,
    };
  }

  match = periodOrKey.match(THIS_RANGE_REGEX);
  if (match) return { type: 'this', unit: match[1] };

  match = periodOrKey.match(TILL_YESTERDAY_REGEX);
  if (match) return { type: 'till_yesterday', start: match[1] };

  match = periodOrKey.match(CUSTOM_REGEX);
  if (match) return { start: match[1], end: match[2] };

  return null;
}

// :: (Object | String) -> Option(String) -> Int
function retrievePeriod(periodOrKey, base = Date(), utcOffset) {
  if (typeof periodOrKey !== 'string') return periodOrKey;

  const baseDate = applyOffset(utcOffset, base);

  const params = retrievePeriodParams(periodOrKey);
  if (params && params.type === 'last') {
    const { unit, num } = params;

    if (params.including_current) {
      return retrieveThisRelativePeriod(unit, baseDate, num);
    }

    return retrieveLastRelativePeriod(num, unit, baseDate);
  }

  if (params && params.type === 'this') {
    return retrieveThisRelativePeriod(params.unit, baseDate);
  }

  if (params && params.type === 'till_yesterday') {
    return retrieveTillYesterday(params.start, base);
  }

  if (params && params.type === 'custom') {
    return { start: params.start, end: params.end };
  }

  return retrievePredefinedDateRange(periodOrKey, baseDate);
}

// :: (Object | String) -> Option(String) -> Object
function calculateAutoCompare(periodOrKey, baseDate = Date()) {
  const autoCompareInfo = { period: {} };
  const period = retrievePeriod(periodOrKey, baseDate);
  const params = retrievePeriodParams(periodOrKey);

  if (params && params.type === 'this') {
    const subtract = getSubtractionFn(params.unit);
    return {
      label: `Previous ${params.unit}`,
      period: {
        start: formatDate(subtract(period.start, 1)),
        end: formatDate(subDays(period.start, 1)),
      },
    };
  }

  if (params && params.type === 'last') {
    const subtract = getSubtractionFn(params.unit);
    return {
      label: `Previous ${params.num} ${params.unit}`,
      period: {
        start: formatDate(subtract(period.start, params.num)),
        end: formatDate(subDays(period.start, 1)),
      },
    };
  }

  if (periodOrKey === 'yesterday') {
    autoCompareInfo.label = 'Previous Day';
  } else {
    autoCompareInfo.label = 'Previous Period';
  }

  const { start, end } = period;
  const span = differenceInDays(end, start) + 1;
  let compareStart = subDays(start, span);
  const compareEnd = subDays(start, 1);

  const endTomorrow = addDays(end, 1);
  // Handle whole month date range
  if (getDate(start) === 1 && getDate(endTomorrow) === 1) {
    const yearsDiff = getYear(endTomorrow) - getYear(start);
    const monthDiff = yearsDiff * 12 + getMonth(endTomorrow) - getMonth(start);
    compareStart = subMonths(period.start, monthDiff);
  }
  // Handle whole year date range
  if (getDayOfYear(start) === 1 && getDayOfYear(endTomorrow) === 1) {
    compareStart = subYears(start, getYear(endTomorrow) - getYear(start));
  }
  autoCompareInfo.period = {
    start: formatDate(compareStart),
    end: formatDate(compareEnd),
  };
  return autoCompareInfo;
}

// :: Object -> Option(String) -> Object
function retrieveComparePeriod(period, comparison = 'auto') {
  if (comparison === 'auto') return calculateAutoCompare(period).period;

  if (comparison === '12_months_ago') {
    // For 12 month comparison, we compare with same period length
    const yearPeriod = retrievePeriod(period);
    return {
      start: formatDate(subYears(yearPeriod.start, 1)),
      end: formatDate(subYears(yearPeriod.end, 1)),
    };
  }

  return comparison;
}

export default {
  migrateLegacyPeriodString,
  retrievePeriod: convertLegacyParams(retrievePeriod),
  retrievePeriodParams: convertLegacyParams(retrievePeriodParams),
  calculateAutoCompare: convertLegacyParams(calculateAutoCompare),
  retrieveComparePeriod: convertLegacyParams(retrieveComparePeriod),
};
