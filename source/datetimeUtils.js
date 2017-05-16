/**
 * Created by linmin on 16/5/17.
 */
const moment = require('moment');
module.exports = {
  today: () => moment().format('YYYY MM DD')
};
