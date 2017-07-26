'use strict';
const {expect} = require('chai');
const sinon = require('sinon');

const datetimeUtils = require('../source/datetimeUtils');

describe('retrieve period string', () => {
  let clock;
  before(function () {
    clock = sinon.useFakeTimers(new Date('2017-03-20').getTime());
  });

  it('retrieve auto comparison for today', () => {
    let period = datetimeUtils.retrieveComparePeriod('today', 'auto');
    expect(period.start).to.equal('2017-03-19');
    expect(period.end).to.equal('2017-03-19');
  });

  it('retrieve auto comparison for yesterday', () => {
    let period = datetimeUtils.retrieveComparePeriod('yesterday', 'auto');
    expect(period.start).to.equal('2017-03-18');
    expect(period.end).to.equal('2017-03-18');
  });

  it('retrieve auto comparison for year_to_date', () => {
    let period = datetimeUtils.retrieveComparePeriod('year_to_date', 'auto');
    expect(period.start).to.equal('2016-01-01');
    expect(period.end).to.equal('2016-12-31');
  });

  it('retrieve auto comparison for custom period', () => {
    let period = datetimeUtils.retrieveComparePeriod({start: '2017-03-15', end: '2017-03-20'}, 'auto');
    expect(period.start).to.equal('2017-03-09');
    expect(period.end).to.equal('2017-03-14');
  });

  it('retrieve auto comparison for this week', () => {
    let period = datetimeUtils.retrieveComparePeriod('this_week', 'auto');
    expect(period.start).to.equal('2017-03-13');
    expect(period.end).to.equal('2017-03-19');
  });

  it('retrieve auto comparison for this month', () => {
    let period = datetimeUtils.retrieveComparePeriod('this_month', 'auto');
    expect(period.start).to.equal('2017-02-01');
    expect(period.end).to.equal('2017-02-28');
  });

  it('retrieve auto comparison for this quarter', () => {
    let period = datetimeUtils.retrieveComparePeriod('this_quarter', 'auto');
    expect(period.start).to.equal('2016-10-01');
    expect(period.end).to.equal('2016-12-31');
  });

  it('retrieve auto comparison for custom period (fit whole month)', () => {
    let period = datetimeUtils.retrieveComparePeriod({start: '2017-06-01', end: '2017-06-30'}, 'auto');
    expect(period.start).to.equal('2017-05-01');
    expect(period.end).to.equal('2017-05-31');
  });

  it('retrieve auto comparison for custom period(fit whole year)', () => {
    let period = datetimeUtils.retrieveComparePeriod({start: '2016-01-01', end: '2016-12-31'}, 'auto');
    expect(period.start).to.equal('2015-01-01');
    expect(period.end).to.equal('2015-12-31');
  });

  after(function () {
    clock.restore();
  });
});
