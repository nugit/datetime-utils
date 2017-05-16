'use strict';

/**
 * Created by linmin on 16/5/17.
 */
var moment = require('moment');
module.exports = {
  today: function today() {
    return moment().format('YYYY MM DD');
  }
};