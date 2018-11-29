function migrateLegacyPeriodString(periodString) {
  if (typeof periodString !== 'string') return periodString;

  const LAST_RANGE_REGEX_LEGACY = /^last(\d+)(day|week|month|quarter|year)s?$/;
  const matchLegacyFormat = periodString.match(LAST_RANGE_REGEX_LEGACY);
  if (matchLegacyFormat) {
    return `last_${matchLegacyFormat[1]}_${matchLegacyFormat[2]}`;
  }

  // last_x_days_including current is deprecated
  const LAST_RANGE_REGEX = /^(last_(\d+)_days?)_including_current$/;
  const matchIncludingCurrentDay = periodString.match(LAST_RANGE_REGEX);
  if (matchIncludingCurrentDay) {
    return matchIncludingCurrentDay[1];
  }

  switch (periodString) {
    case 'today':
      return 'yesterday';
    case 'year_to_date':
      return 'this_year';
    default:
      return periodString;
  }
}

// Proxy given function to migrate legacy period parameter
function convertLegacyParams(fn) {
  return (period, ...args) => fn(migrateLegacyPeriodString(period), ...args);
}

export {
  migrateLegacyPeriodString,
  convertLegacyParams,
};
