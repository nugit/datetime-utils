function migrateLegacyPeriodString(periodString) {
  if (typeof periodString !== 'string') return periodString;

  const LAST_RANGE_REGEX_LEGACY = /^last(\d+)(day|week|month|quarter|year)s?$/;
  let match = periodString.match(LAST_RANGE_REGEX_LEGACY);
  if (match) {
    return `last_${match[1]}_${match[2]}`;
  }

  // last_x_days_including current is deprecated
  const LAST_RANGE_REGEX = /^(last_(\d+)_days?)_including_current$/;
  match = periodString.match(LAST_RANGE_REGEX);
  if (match) {
    return match[1];
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

function convertLegacyParams(fn) {
  return (period, ...args) => fn(migrateLegacyPeriodString(period), ...args);
}

export {
  migrateLegacyPeriodString,
  convertLegacyParams,
};
