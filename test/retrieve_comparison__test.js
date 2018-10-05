const { expect } = require('chai');
const sinon = require('sinon');

const datetimeUtils = require('../src/main');

describe('retrieve period string', () => {
  let clock;
  before(() => {
    clock = sinon.useFakeTimers(new Date('2017-03-20').getTime());
  });

  it('retrieve auto comparison for today', () => {
    const period = datetimeUtils.retrieveComparePeriod('today', 'auto');
    expect(period.start).to.equal('2017-03-19');
    expect(period.end).to.equal('2017-03-19');
  });

  it('retrieve auto comparison for yesterday', () => {
    const period = datetimeUtils.retrieveComparePeriod('yesterday', 'auto');
    expect(period.start).to.equal('2017-03-18');
    expect(period.end).to.equal('2017-03-18');
  });

  it('retrieve auto comparison for year_to_date', () => {
    const period = datetimeUtils.retrieveComparePeriod('year_to_date', 'auto');
    expect(period.start).to.equal('2016-01-01');
    expect(period.end).to.equal('2016-12-31');
  });

  it('retrieve auto comparison for custom period', () => {
    const period = datetimeUtils.retrieveComparePeriod({ start: '2017-03-15', end: '2017-03-20' }, 'auto');
    expect(period.start).to.equal('2017-03-09');
    expect(period.end).to.equal('2017-03-14');
  });

  it('retrieve auto comparison for this week', () => {
    const period = datetimeUtils.retrieveComparePeriod('this_week', 'auto');
    expect(period.start).to.equal('2017-03-13');
    expect(period.end).to.equal('2017-03-19');
  });

  it('retrieve auto comparison for this month', () => {
    const period = datetimeUtils.retrieveComparePeriod('this_month', 'auto');
    expect(period.start).to.equal('2017-02-01');
    expect(period.end).to.equal('2017-02-28');
  });

  it('retrieve auto comparison for this quarter', () => {
    const period = datetimeUtils.retrieveComparePeriod('this_quarter', 'auto');
    expect(period.start).to.equal('2016-10-01');
    expect(period.end).to.equal('2016-12-31');
  });

  it('retrieve auto comparison for custom period (fit whole month)', () => {
    const period = datetimeUtils.retrieveComparePeriod({ start: '2017-06-01', end: '2017-06-30' }, 'auto');
    expect(period.start).to.equal('2017-05-01');
    expect(period.end).to.equal('2017-05-31');
  });

  it('retrieve auto comparison for custom period(fit whole year)', () => {
    const period = datetimeUtils.retrieveComparePeriod({ start: '2016-01-01', end: '2016-12-31' }, 'auto');
    expect(period.start).to.equal('2015-01-01');
    expect(period.end).to.equal('2015-12-31');
  });

  after(() => {
    clock.restore();
  });
});
