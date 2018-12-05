import { getRange, getPeriodParams, getCompareRange, getAutoCompareRangeAndLabel, getCustomPeriod } from './main';

function migrateLegacyPeriod(period) {
  if (typeof period !== 'string') {
    // a range is provided, this is legacy way to handle custom periods
    return getCustomPeriod(period.start, period.end);
  }

  const LAST_RANGE_REGEX_LEGACY = /^last(\d+)(day|week|month|quarter|year)s?$/;
  const matchLegacyFormat = period.match(LAST_RANGE_REGEX_LEGACY);
  if (matchLegacyFormat) {
    return `last_${matchLegacyFormat[1]}_${matchLegacyFormat[2]}`;
  }

  // last_x_days_including current is deprecated
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
}

function migrateLegacyCompareMode(compareMode = 'auto') {
  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;
    default:
      // in that case compareMode is actually a range
      return migrateLegacyPeriod(compareMode);
  }
}

// Proxy given function to migrate legacy period parameter
function convertLegacyParams(fn) {
  return (period, ...args) => fn(migrateLegacyPeriod(period), ...args);
}

function toLegacyPeriod(period) {
  const { type } = getPeriodParams(period);

  return type === 'custom' ? getRange(period) : period;
}

function toLegacyCompareMode(compareMode) {
  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;
    default:
      return toLegacyPeriod(compareMode);
  }
}

const retrievePeriod = convertLegacyParams(getRange);
const retrievePeriodParams = convertLegacyParams(getPeriodParams);
const retrieveComparePeriod = (period, compareMode) => getCompareRange(
  migrateLegacyPeriod(period),
  migrateLegacyCompareMode(compareMode),
);
const calculateAutoCompare = (period, base) => {
  const { label, range } = getAutoCompareRangeAndLabel(
    getRange(migrateLegacyPeriod(period)),
    base,
  );

  return { label, period: range };
};
export {
  toLegacyPeriod,
  toLegacyCompareMode,
  migrateLegacyPeriod,
  migrateLegacyCompareMode,
  retrievePeriod,
  retrievePeriodParams,
  retrieveComparePeriod,
  calculateAutoCompare,
};
