import { calculateAutoCompare, migrateLegacyCompareMode, migrateLegacyPeriod, retrieveComparePeriod, retrievePeriod, retrievePeriodParams, toLegacyCompareMode, toLegacyPeriod } from './legacy';
import { getAutoCompareRangeAndLabel, getCompareRange, getCustomPeriod, getLastPeriod, getPeriodParams, getRange, getThisPeriod, getTillYesterdayPeriod } from './main';
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
