'use strict';

const expect = require('chai').expect;
const { TimeDivider, Units } = require('../time-divider');

describe('test', () => {
  it('millionSecond', () => {
    const START_TIME = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
    const CHUNKS_LENGTH = 20;
    const TIME = 1;
    const INTERVAL = 2;
    const END_TIME = START_TIME + CHUNKS_LENGTH * INTERVAL * TIME;

    const chunks = new TimeDivider(START_TIME, END_TIME).divide(
      INTERVAL,
      Units.Millisecond,
    );
    expect(chunks.length).equal(CHUNKS_LENGTH);
    expect(chunks[0].start).equal(START_TIME);
    expect(chunks[CHUNKS_LENGTH - 1].end).equal(END_TIME - 1);
    for (let i = 1; i < CHUNKS_LENGTH; i++) {
      expect(chunks[i].start - chunks[i - 1].start).equal(TIME * INTERVAL);
    }
  });

  it('millionSecond without unit', () => {
    const START_TIME = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
    const CHUNKS_LENGTH = 20;
    const TIME = 1;
    const INTERVAL = 2;
    const END_TIME = START_TIME + CHUNKS_LENGTH * INTERVAL * TIME;

    const chunks = new TimeDivider(START_TIME, END_TIME).divide(INTERVAL);
    expect(chunks.length).equal(CHUNKS_LENGTH);
    expect(chunks[0].start).equal(START_TIME);
    expect(chunks[CHUNKS_LENGTH - 1].end).equal(END_TIME - 1);
    for (let i = 1; i < CHUNKS_LENGTH; i++) {
      expect(chunks[i].start - chunks[i - 1].start).equal(TIME * INTERVAL);
    }
  });

  it('second', () => {
    const START_TIME = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
    const CHUNKS_LENGTH = 20;
    const TIME = 1000;
    const INTERVAL = 2;
    const END_TIME = START_TIME + CHUNKS_LENGTH * INTERVAL * TIME;

    const chunks = new TimeDivider(START_TIME, END_TIME).divide(
      INTERVAL,
      Units.Second,
    );
    expect(chunks.length).equal(CHUNKS_LENGTH);
    expect(chunks[0].start).equal(START_TIME);
    expect(chunks[CHUNKS_LENGTH - 1].end).equal(END_TIME - 1);
    for (let i = 1; i < CHUNKS_LENGTH; i++) {
      expect(chunks[i].start - chunks[i - 1].start).equal(TIME * INTERVAL);
    }
  });

  it('minute', () => {
    const START_TIME = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
    const CHUNKS_LENGTH = 20;
    const TIME = 1000 * 60;
    const INTERVAL = 2;
    const END_TIME = START_TIME + CHUNKS_LENGTH * INTERVAL * TIME;

    const chunks = new TimeDivider(START_TIME, END_TIME).divide(
      INTERVAL,
      Units.Minute,
    );
    expect(chunks.length).equal(CHUNKS_LENGTH);
    expect(chunks[0].start).equal(START_TIME);
    expect(chunks[CHUNKS_LENGTH - 1].end).equal(END_TIME - 1);
    for (let i = 1; i < CHUNKS_LENGTH; i++) {
      expect(chunks[i].start - chunks[i - 1].start).equal(TIME * INTERVAL);
    }
  });

  it('hour', () => {
    const START_TIME = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
    const CHUNKS_LENGTH = 20;
    const TIME = 1000 * 60 * 60;
    const INTERVAL = 2;
    const END_TIME = START_TIME + CHUNKS_LENGTH * INTERVAL * TIME;

    const chunks = new TimeDivider(START_TIME, END_TIME).divide(
      INTERVAL,
      Units.Hour,
    );
    expect(chunks.length).equal(CHUNKS_LENGTH);
    expect(chunks[0].start).equal(START_TIME);
    expect(chunks[CHUNKS_LENGTH - 1].end).equal(END_TIME - 1);
    for (let i = 1; i < CHUNKS_LENGTH; i++) {
      expect(chunks[i].start - chunks[i - 1].start).equal(TIME * INTERVAL);
    }
  });

  it('day', () => {
    const START_TIME = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
    const CHUNKS_LENGTH = 20;
    const TIME = 1000 * 60 * 60 * 24;
    const INTERVAL = 2;
    const END_TIME = START_TIME + CHUNKS_LENGTH * INTERVAL * TIME;

    const chunks = new TimeDivider(START_TIME, END_TIME).divide(
      INTERVAL,
      Units.Day,
    );
    expect(chunks.length).equal(CHUNKS_LENGTH);
    expect(chunks[0].start).equal(START_TIME);
    expect(chunks[CHUNKS_LENGTH - 1].end).equal(END_TIME - 1);
    for (let i = 1; i < CHUNKS_LENGTH; i++) {
      expect(chunks[i].start - chunks[i - 1].start).equal(TIME * INTERVAL);
    }
  });

  it('week', () => {
    const START_TIME = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
    const CHUNKS_LENGTH = 20;
    const TIME = 1000 * 60 * 60 * 24 * 7;
    const INTERVAL = 2;
    const END_TIME = START_TIME + CHUNKS_LENGTH * INTERVAL * TIME;

    const chunks = new TimeDivider(START_TIME, END_TIME).divide(
      INTERVAL,
      Units.Week,
    );
    expect(chunks.length).equal(CHUNKS_LENGTH);
    expect(chunks[0].start).equal(START_TIME);
    expect(chunks[CHUNKS_LENGTH - 1].end).equal(END_TIME - 1);
    for (let i = 1; i < CHUNKS_LENGTH; i++) {
      expect(chunks[i].start - chunks[i - 1].start).equal(TIME * INTERVAL);
    }
  });

  it('month', () => {
    const START_TIME = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
    const CHUNKS_LENGTH = 20;
    const INTERVAL = 2;
    const END_TIME = new Date(
      new Date(START_TIME).setMonth(
        new Date(START_TIME).getMonth() + INTERVAL * CHUNKS_LENGTH,
      ),
    ).getTime();

    const chunks = new TimeDivider(START_TIME, END_TIME).divide(
      INTERVAL,
      Units.Month,
    );
    expect(chunks.length).equal(CHUNKS_LENGTH);
    expect(chunks[0].start).equal(START_TIME);
    expect(chunks[CHUNKS_LENGTH - 1].end).equal(END_TIME - 1);
    for (let i = 1; i < CHUNKS_LENGTH; i++) {
      expect(
        (new Date(chunks[i].start).getMonth() -
          new Date(chunks[i - 1].start).getMonth() +
          12) %
          12,
      ).equal(INTERVAL);
    }
  });

  it('year', () => {
    const START_TIME = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
    const CHUNKS_LENGTH = 20;
    const INTERVAL = 2;
    const END_TIME = new Date(
      new Date(START_TIME).setFullYear(
        new Date(START_TIME).getFullYear() + INTERVAL * CHUNKS_LENGTH,
      ),
    ).getTime();

    const chunks = new TimeDivider(START_TIME, END_TIME).divide(
      INTERVAL,
      Units.Year,
    );
    expect(chunks.length).equal(CHUNKS_LENGTH);
    expect(chunks[0].start).equal(START_TIME);
    expect(chunks[CHUNKS_LENGTH - 1].end).equal(END_TIME - 1);
    for (let i = 1; i < CHUNKS_LENGTH; i++) {
      expect(
        new Date(chunks[i].start).getFullYear() -
          new Date(chunks[i - 1].start).getFullYear(),
      ).equal(INTERVAL);
    }
  });

  it('year without endTime', () => {
    const START_TIME = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
    const INTERVAL = 2;

    const chunks = new TimeDivider(START_TIME).divide(INTERVAL, Units.Year);
    expect(chunks[0].start).equal(START_TIME);
    for (let i = 1; i < chunks.length; i++) {
      expect(
        new Date(chunks[i].start).getFullYear() -
          new Date(chunks[i - 1].start).getFullYear(),
      ).equal(INTERVAL);
    }
  });
});
