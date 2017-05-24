/**
 * Created by linmin on 19/5/17.
 */
let moment = null;
if (global.window && global.window.moment) {
  moment = global.window.moment;
} else {
  try {
    moment = require('moment');
  } catch (e) {
    throw new Error('Moment.js dependency not loaded');
  }
}

const dateFormat = 'YYYY-MM-DD';
function retrievePredefindedDateRange(key, base) {
  let start = moment(base), end = moment(base);
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
  let start = moment(base), end = moment(base);
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
      start: moment().subtract(num, 'months').date(1).format(dateFormat),
      end: moment().date(0).format(dateFormat)
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
  let start = moment(base), end = moment(base);
  if (unit === 'week') {
    return {
      start: start.day(1).format(dateFormat),
      end: end.day(7).format(dateFormat),
    };
  } else if (unit === 'month') {
    return {
      start: start.date(1).format(dateFormat),
      end: end.subtract(1, 'days').format(dateFormat),
    };
  } else if (unit === 'quarter') {
    return {
      start: start.subtract(start.month() % 3, 'months').date(1).format(dateFormat),
      // end: end.add(3 - end.month() % 3, 'months').date(0).format(dateFormat)
      end: end.subtract(1, 'days').format(dateFormat)
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
  const LAST_RANGE_REGEX = /^last(\d+)(day|week|month|quarter|year)s?$/;
  const LAST_RANGE_REGEX_1 = /^last_(day|week|month|quarter|year)$/;
  const LAST_RANGE_REGEX_2 = /^last_(\d+)_(day|week|month|quarter|year)s?(_including_current)?$/;
  const THIS_RANGE_REGEX = /^this_(day|week|month|quarter|year)$/;
  const TILL_YESTERDAY_REGEX = /^(\d{4}-\d{2}-\d{2})_to_yesterday$/;

  let match = periodOrKey.match(LAST_RANGE_REGEX);
  if (match) {
    return {type: 'last', num: Number(match[1]), unit: match[2]}; //old format e.g.: last12months
  }
  match = periodOrKey.match(LAST_RANGE_REGEX_1);
  if (match) {
    return {type: 'last', num: 1, unit: match[1]};
  }
  match = periodOrKey.match(LAST_RANGE_REGEX_2);
  if (match) {
    return {
      type: 'last',
      num: Number(match[1]),
      unit: match[2],
      newFormat: true,
      including_current: match[3] === '_including_current',
      includeingParam: match[2] === 'day' ? 'today' : `this ${match[2]}`
    };
  }
  match = periodOrKey.match(THIS_RANGE_REGEX);
  if (match) {
    return {type: 'this', unit: match[1]};
  }
  match = periodOrKey.match(TILL_YESTERDAY_REGEX);
  if (match) {
    return {type: 'till_tomorrow', start: match[1]};
  }
  if (periodOrKey === 'last') {
    return {type: 'last', num: undefined, unit: undefined};
  }
  return null;
}

function retrievePeriod(periodOrKey, baseDate) {
  if (typeof periodOrKey !== 'string') {
    return periodOrKey;
  }
  let params = retrievePeriodParams(periodOrKey);
  if (params && params.type === 'last') {
    let num = params.num;
    if (params.including_current) {
      if (params.num === 1) {
        return retrieveThisRelativePeriod(params.unit, baseDate);
      } else {
        let part1 = retrieveLastRelativePeriod(params.num - 1, params.unit, baseDate);
        let part2 = retrieveThisRelativePeriod(params.unit, baseDate);
        return {
          start: part1.start,
          end: part2.end
        };
      }
    } else {
      return retrieveLastRelativePeriod(params.num, params.unit, baseDate);
    }
  } else if (params && params.type === 'this') {
    return retrieveThisRelativePeriod(params.unit, baseDate);
  } else if (params && params.type === 'till_tomorrow') {
    return {
      start: params.start,
      end: moment(baseDate).subtract(1, 'days').format('YYYY-MM-DD')
    };
  }
  return retrievePredefindedDateRange(periodOrKey);
}

const getDateRange = retrievePeriod;

module.exports = {getDateRange, retrievePeriod, retrievePeriodParams};
