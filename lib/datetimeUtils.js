'use strict';

var moment = require('moment');
var _ = require('lodash');

var getDateRangeFromString = function getDateRangeFromString(period, static_moment_ms) {
  // TODO test
  var dateFormat = 'YYYY-MM-DD';
  switch (period) {
    case 'yesterday':
      return {
        start: moment(static_moment_ms).subtract(1, 'days').format(dateFormat),
        end: moment(static_moment_ms).subtract(1, 'days').format(dateFormat)
      };
    case 'last7days':
      return {
        start: moment(static_moment_ms).subtract(7, 'days').format(dateFormat),
        end: moment(static_moment_ms).subtract(1, 'days').format(dateFormat)
      };
    case 'last_week':
      return {
        start: moment(static_moment_ms).subtract(1, 'weeks').day(1).format(dateFormat),
        end: moment(static_moment_ms).subtract(1, 'weeks').day(7).format(dateFormat)
      };
    case 'last4weeks':
      return {
        start: moment(static_moment_ms).subtract(4, 'weeks').day(1).format(dateFormat),
        end: moment(static_moment_ms).subtract(1, 'weeks').day(7).format(dateFormat)
      };
    case 'this_month':
      return {
        start: moment(static_moment_ms).startOf('month').date(1).format(dateFormat),
        end: moment(static_moment_ms).subtract(1, 'days').format(dateFormat)
      };
    case 'last_month':
      return {
        start: moment(static_moment_ms).subtract(1, 'months').date(1).format(dateFormat),
        end: moment(static_moment_ms).date(0).format(dateFormat)
      };
    case 'last3months':
      return {
        start: moment(static_moment_ms).subtract(3, 'months').date(1).format(dateFormat),
        end: moment(static_moment_ms).date(0).format(dateFormat)
      };
    case 'last12months':
      return {
        start: moment(static_moment_ms).subtract(12, 'months').date(1).format(dateFormat),
        end: moment(static_moment_ms).date(0).format(dateFormat)
      };
    case 'this_year':
      return {
        start: moment(static_moment_ms).month(0).date(1).format(dateFormat),
        end: moment(static_moment_ms).subtract(1, 'days').format(dateFormat)
      };
    case 'last_year':
      return {
        start: moment(static_moment_ms).subtract(1, 'year').month(0).date(1).format(dateFormat),
        end: moment(static_moment_ms).subtract(1, 'year').month(11).date(31).format(dateFormat)
      };
    case 'all_time':
      return {
        start: moment(static_moment_ms).subtract(3, 'year').format(dateFormat),
        end: moment(static_moment_ms).date(0).format(dateFormat)
      };
    default:
      throw new Error('period ' + period + ' not supported');
  }
};

var getDateRange = function getDateRange(period, static_moment_ms) {
  return _.isString(period) ? getDateRangeFromString(period, static_moment_ms) : period;
};

module.exports = { getDateRange: getDateRange };