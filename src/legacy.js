// @flow

import { getAutoCompareRangeAndLabel, getCompareRange, getCustomPeriod, getPeriodParams, getRange } from './main';
import type { CompareMode, DateLike, LegacyCompareMode, LegacyPeriod, Period, PeriodParams, Range } from './types.js.flow';

const migrateLegacyPeriod = (period: LegacyPeriod): Period => {
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
};

const migrateLegacyCompareMode = (compareMode?: LegacyCompareMode = 'auto'): CompareMode => {
  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;
    default:
      // in that case compareMode is actually a range
      return migrateLegacyPeriod(compareMode);
  }
};

const toLegacyPeriod = (period: Period): LegacyPeriod => {
  const { type } = getPeriodParams(period);

  return type === 'custom' ? getRange(period) : period;
};

const toLegacyCompareMode = (compareMode: CompareMode): LegacyCompareMode => {
  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;
    default:
      return toLegacyPeriod(compareMode);
  }
};

const retrievePeriod = (
  period: LegacyPeriod, base?: DateLike = new Date(), offset?: string | number = 0,
): Range => (
  getRange(migrateLegacyPeriod(period), base, offset)
);

const retrievePeriodParams = (period: LegacyPeriod): PeriodParams => (
  getPeriodParams(migrateLegacyPeriod(period))
);

const retrieveComparePeriod = (
  period: LegacyPeriod, compareMode?: LegacyCompareMode = 'auto',
): Range => getCompareRange(
  migrateLegacyPeriod(period),
  migrateLegacyCompareMode(compareMode),
);

type CalculateAutoCompareReturn = {|
  label: string,
  period: Range,
|};

const calculateAutoCompare = (
  period: LegacyPeriod, base?: DateLike = new Date(),
): CalculateAutoCompareReturn => {
  const { label, range } = getAutoCompareRangeAndLabel(
    migrateLegacyPeriod(period),
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
