export class TimeChunk {
  startTime: number;
  endTime: number;

  constructor(startTime: number, endTime: number = Date.now()) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  chunk(interval: number, unit: UNITS = UNITS.MILLIONSECOND) {
    const chunks = [];
    for (let currTime = this.startTime; currTime < this.endTime; ) {
      const next = this._add(currTime, interval, unit);
      chunks.push({
        start: currTime,
        end: Math.min(next, this.endTime) - 1,
      });
      currTime = next;
    }
    return chunks;
  }

  private _add(time: number, interval: number, unit: UNITS) {
    return this[unit](time, interval);
  }

  private _addMillionSecond(time: number, interval: number) {
    return time + interval;
  }

  private _addSeconde(time: number, interval: number) {
    return time + interval * 1000;
  }

  private _addMinute(time: number, interval: number) {
    return time + interval * 1000 * 60;
  }

  private _addHour(time: number, interval: number) {
    return time + interval * 1000 * 60 * 60;
  }

  private _addDay(time: number, interval: number) {
    return time + interval * 1000 * 60 * 60 * 24;
  }

  private _addWeek(time: number, interval: number) {
    return time + interval * 1000 * 60 * 60 * 24 * 7;
  }

  private _addMonth(time: number, interval: number) {
    return new Date(
      new Date(time).setMonth(new Date(time).getMonth() + interval),
    ).getTime();
  }

  private _addYear(time: number, interval: number) {
    return new Date(
      new Date(time).setFullYear(new Date(time).getFullYear() + interval),
    ).getTime();
  }
}

export enum UNITS {
  MILLIONSECOND = '_addMillionSecond',
  SECOND = '_addSeconde',
  MINUTE = '_addMinute',
  HOUR = '_addHour',
  DAY = '_addDay',
  WEEK = '_addWeek',
  MONTH = '_addMonth',
  YEAR = '_addYear',
}
