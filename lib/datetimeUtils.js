'use strict';

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = 'YYYY-MM-DD'; /**
                                * Created by linmin on 19/5/17.
                                */

function retrievePredefindedDateRange(key, base) {
  var start = (0, _moment2.default)(base),
      end = (0, _moment2.default)(base);
  if (key === 'today') {
    return {
      start: start.format(dateFormat),
      end: end.format(dateFormat)
    };
  } else if (key === 'yesterday') {
    return {
      start: start.subtract(1, 'days').format(dateFormat),
      end: end.subtract(1, 'days').format(dateFormat)
    };
  } else if (key === 'year_to_date') {
    return {
      start: start.month(0).date(1).format(dateFormat),
      end: end.subtract(1, 'days').format(dateFormat)
    };
  } else if (key === 'all_time') {
    return {
      start: start.subtract(3, 'year').format(dateFormat),
      end: end.date(0).format(dateFormat)
    };
  } else {
    throw new Error('Unrecognized date range: ' + key);
  }
}
function retrieveLastRelativePeriod(num, unit, base) {
  var start = (0, _moment2.default)(base),
      end = (0, _moment2.default)(base);
  if (unit === 'day') {
    return {
      start: start.subtract(num, 'days').format(dateFormat),
      end: end.subtract(1, 'days').format(dateFormat)
    };
  } else if (unit === 'week') {
    return {
      start: start.subtract(num, 'weeks').day(1).format(dateFormat),
      end: end.subtract(1, 'weeks').day(7).format(dateFormat)
    };
  } else if (unit === 'month') {
    return {
      start: (0, _moment2.default)().subtract(num, 'months').date(1).format(dateFormat),
      end: (0, _moment2.default)().date(0).format(dateFormat)
    };
  } else if (unit === 'quarter') {
    return {
      start: start.subtract(3 * num, 'months').subtract(start.month() % 3, 'months').date(1).format(dateFormat),
      end: end.subtract(3 * num, 'months').add(3 - end.month() % 3, 'months').date(0).format(dateFormat)
    };
  } else if (unit === 'year') {
    return {
      start: start.subtract(num, 'year').month(0).date(1),
      end: end.subtract(1, 'year').month(11).date(31)
    };
  }
}

function retrieveThisRelativePeriod(unit, base) {
  var start = (0, _moment2.default)(base),
      end = (0, _moment2.default)(base);
  if (unit === 'week') {
    return {
      start: start.day(1).format(dateFormat),
      end: end.day(7).format(dateFormat)
    };
  } else if (unit === 'month') {
    return {
      start: start.date(1).format(dateFormat),
      end: end.subtract(1, 'days').format(dateFormat)
    };
  } else if (unit === 'quarter') {
    return {
      start: start.subtract(start.month() % 3, 'months').date(1).format(dateFormat),
      end: end.add(3 - end.month() % 3, 'months').date(0).format(dateFormat)
    };
  } else if (unit === 'year') {
    return {
      start: start.month(0).date(1).format(dateFormat),
      end: end.subtract(1, 'days').format(dateFormat)
    };
  }
}

function retrievePeriodParams(periodOrKey) {
  if (typeof periodOrKey !== 'string') {
    return periodOrKey;
  }
  var LAST_RANGE_REGEX = /^last(\d+)(day|week|month|quarter|year)s?$/;
  var LAST_RANGE_REGEX_1 = /^last_(day|week|month|quarter|year)$/;
  var LAST_RANGE_REGEX_2 = /^last_(\d+)_(day|week|month|quarter|year)s?$/;
  var THIS_RANGE_REGEX = /^this_(day|week|month|quarter|year)$/;
  var TILL_YESTERDAY_REGEX = /^(\d{4}-\d{2}-\d{2})_to_yesterday$/;

  var match = periodOrKey.match(LAST_RANGE_REGEX);
  if (match) {
    return { type: 'last', num: match[1], unit: match[2] }; //old format e.g.: last12months
  }
  match = periodOrKey.match(LAST_RANGE_REGEX_1);
  if (match) {
    return { type: 'last', num: 1, unit: match[1] };
  }
  match = periodOrKey.match(LAST_RANGE_REGEX_2);
  if (match) {
    return { type: 'last', num: match[1], unit: match[2], newFormat: true }; //dynamic last_12_months
  }
  match = periodOrKey.match(THIS_RANGE_REGEX);
  if (match) {
    return { type: 'this', unit: match[1] };
  }
  match = periodOrKey.match(TILL_YESTERDAY_REGEX);
  if (match) {
    return { type: 'till_tomorrow', start: match[1] };
  }
  if (periodOrKey === 'last') {
    return { type: 'last', num: undefined, unit: undefined };
  }
  return null;
}

function retrievePeriod(periodOrKey, baseDate) {
  if (typeof periodOrKey !== 'string') {
    return periodOrKey;
  }
  var params = retrievePeriodParams(periodOrKey);
  if (params && params.type === 'last') {
    return retrieveLastRelativePeriod(params.num, params.unit, baseDate);
  } else if (params && params.type === 'this') {
    return retrieveThisRelativePeriod(params.unit, baseDate);
  } else if (params && params.type === 'till_tomorrow') {
    return {
      start: params.start,
      end: (0, _moment2.default)(baseDate).subtract(1, 'days').format('YYYY-MM-DD')
    };
  }
  return retrievePredefindedDateRange(periodOrKey);
}

var getDateRange = retrievePeriod;

module.exports = { getDateRange: getDateRange, retrievePeriod: retrievePeriod, retrievePeriodParams: retrievePeriodParams };