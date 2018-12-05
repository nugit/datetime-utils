import { getRange, getPeriodParams, getCompareRange, getAutoCompareRangeAndLabel, getTillYesterdayPeriod, getCustomPeriod, getLastPeriod, getThisPeriod } from './main';
import { migrateLegacyPeriod, migrateLegacyCompareMode, convertLegacyParams, toLegacyPeriod, toLegacyCompareMode } from './legacy';
import { formatDate } from './utils';

export default {
  formatDate,
  getTillYesterdayPeriod,
  getCustomPeriod,
  getLastPeriod,
  getThisPeriod,
  migrateLegacyPeriod,
  migrateLegacyCompareMode,
  toLegacyPeriod,
  toLegacyCompareMode,
  getRange,
  getPeriodParams,
  getCompareRange,
  getAutoCompareRangeAndLabel,
  // legacy
  retrievePeriod: convertLegacyParams(getRange),
  retrievePeriodParams: convertLegacyParams(getPeriodParams),
  retrieveComparePeriod: (period, compareMode) => getCompareRange(
    migrateLegacyPeriod(period),
    migrateLegacyCompareMode(compareMode),
  ),
  calculateAutoCompare: convertLegacyParams(getAutoCompareRangeAndLabel),
};
