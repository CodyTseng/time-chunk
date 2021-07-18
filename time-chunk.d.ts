export declare class TimeChunk {
    startTime: number;
    endTime: number;
    constructor(startTime: number, endTime?: number);
    chunk(interval: number, unit?: UNITS): any[];
    private _add;
    private _addMillionSecond;
    private _addSeconde;
    private _addMinute;
    private _addHour;
    private _addDay;
    private _addWeek;
    private _addMonth;
    private _addYear;
}
export declare enum UNITS {
    MILLIONSECOND = "ms",
    SECOND = "s",
    MINUTE = "m",
    HOUR = "h",
    DAY = "D",
    WEEK = "W",
    MONTH = "M",
    YEAR = "Y"
}
