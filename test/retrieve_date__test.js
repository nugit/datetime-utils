'use strict';
const {expect} = require('chai');
const sinon = require('sinon');

const datetimeUtils = require('../source/datetimeUtils');

describe('retrieve period string', () => {
  context('without baseDate', () => {
    let clock;
    before(function () {
      clock = sinon.useFakeTimers(new Date('2017-03-20').getTime());
    });

    it('retrieve today', () => {
      let period = datetimeUtils.retrievePeriod('today');
      expect(period.start).to.equal('2017-03-20');
      expect(period.end).to.equal('2017-03-20');
    });

    it('retrieve yesterday', () => {
      let period = datetimeUtils.retrievePeriod('yesterday');
      expect(period.start).to.equal('2017-03-19');
      expect(period.end).to.equal('2017-03-19');
    });

    it('retrieve year_to_date', () => {
      let period = datetimeUtils.retrievePeriod('year_to_date');
      expect(period.start).to.equal('2017-01-01');
      expect(period.end).to.equal('2017-03-20');
    });

    it('retrieve all_time', () => {
      let period = datetimeUtils.retrievePeriod('all_time');
      expect(period.start).to.equal('2014-03-20');
      expect(period.end).to.equal('2017-03-20');
    });

    it('retrieve last_week', () => {
      let period = datetimeUtils.retrievePeriod('last_week');
      expect(period.start).to.equal('2017-03-13');
      expect(period.end).to.equal('2017-03-19');
    });

    it('retrieve last_month', () => {
      let period = datetimeUtils.retrievePeriod('last_month');
      expect(period.start).to.equal('2017-02-01');
      expect(period.end).to.equal('2017-02-28');
    });

    it('retrieve last_quarter', () => {
      let period = datetimeUtils.retrievePeriod('last_quarter');
      expect(period.start).to.equal('2016-10-01');
      expect(period.end).to.equal('2016-12-31');
    });

    it('retrieve last_year', () => {
      let period = datetimeUtils.retrievePeriod('last_year');
      expect(period.start).to.equal('2016-01-01');
      expect(period.end).to.equal('2016-12-31');
    });

    it('retrieve last_3_days', () => {
      let period = datetimeUtils.retrievePeriod('last_3_days');
      expect(period.start).to.equal('2017-03-17');
      expect(period.end).to.equal('2017-03-19');
      period = datetimeUtils.retrievePeriod('last3days');
      expect(period.start).to.equal('2017-03-17');
      expect(period.end).to.equal('2017-03-19');
    });

    it('retrieve last_3_weeks', () => {
      let period = datetimeUtils.retrievePeriod('last_3_weeks');
      expect(period.start).to.equal('2017-02-27');
      expect(period.end).to.equal('2017-03-19');
      period = datetimeUtils.retrievePeriod('last3weeks');
      expect(period.start).to.equal('2017-02-27');
      expect(period.end).to.equal('2017-03-19');
    });
    it('retrieve last_3_months', () => {
      let period = datetimeUtils.retrievePeriod('last_3_months');
      expect(period).to.deep.equal({
        "start": "2016-12-01",
        "end": "2017-02-28"
      });
      period = datetimeUtils.retrievePeriod('last3months');
      expect(period).to.deep.equal({
        "start": "2016-12-01",
        "end": "2017-02-28"
      });
    });
    it('retrieve last_2_quarters', () => {
      let period = datetimeUtils.retrievePeriod('last_2_quarters');
      expect(period).to.deep.equal({
        "start": "2016-07-01",
        "end": "2016-09-30"
      });
    });

    it('retrieve last_2_years', () => {
      let period = datetimeUtils.retrievePeriod('last_2_years');
      expect(period).to.deep.equal({
        "start": "2015-01-01",
        "end": "2016-12-31"
      });
    });

    it('retrieve last_3_days_including_current', () => {
      let period = datetimeUtils.retrievePeriod('last_3_days_including_current');
      expect(period).to.deep.equal({
        "start": "2017-03-18",
        "end": "2017-03-20"
      });
    });

    it('retrieve last_2_weeks_including_current', () => {
      let period = datetimeUtils.retrievePeriod('last_2_weeks_including_current');
      expect(period).to.deep.equal({
        "start": "2017-03-13",
        "end": "2017-03-26"
      });
    });

    it('retrieve last_1_quarter_including_current', () => {
      let period = datetimeUtils.retrievePeriod('last_1_quarter_including_current');
      expect(period).to.deep.equal({
        "start": "2017-01-01",
        "end": "2017-03-31"
      });
    });

    it('retrieve last_1_year_including_current', () => {
      let period = datetimeUtils.retrievePeriod('last_1_year_including_current');
      expect(period).to.deep.equal({
        "start": "2017-01-01",
        "end": "2017-12-31"
      });
    });

    after(function () {
      clock.restore();
    });
  });

  context('with baseDate', () => {
    let january2015 = 1420070400000;
    it('retrieve last_month', () => {
      let period = datetimeUtils.retrievePeriod('last_month', january2015);
      expect(period.start).to.equal('2015-01-01');
      expect(period.end).to.equal('2015-12-31');
    });
  })
});