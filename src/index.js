import { getRange, getPeriodParams, getCompareRange, getAutoCompareRangeAndLabel, getTillYesterdayPeriod, getCustomPeriod, getLastPeriod, getThisPeriod } from './main';
import { migrateLegacyPeriod, migrateLegacyCompareMode, toLegacyPeriod, toLegacyCompareMode, retrievePeriod, retrievePeriodParams, retrieveComparePeriod, calculateAutoCompare } from './legacy';
import { formatDate } from './utils';

export default {
  getRange,
  getPeriodParams,
  getCompareRange,
  getAutoCompareRangeAndLabel,
  getTillYesterdayPeriod,
  getCustomPeriod,
  getLastPeriod,
  getThisPeriod,
  formatDate,
  // legacy
  migrateLegacyPeriod,
  migrateLegacyCompareMode,
  toLegacyPeriod,
  toLegacyCompareMode,
  retrievePeriod,
  retrievePeriodParams,
  retrieveComparePeriod,
  calculateAutoCompare,
};
