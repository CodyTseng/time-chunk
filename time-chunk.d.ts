export declare class TimeChunk {
    startTime: number;
    endTime: number;
    constructor(startTime: number, endTime?: number);
    chunk(interval: number, unit?: UNITS): {
        start: number;
        end: number;
    }[];
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
    MILLIONSECOND = "_addMillionSecond",
    SECOND = "_addSeconde",
    MINUTE = "_addMinute",
    HOUR = "_addHour",
    DAY = "_addDay",
    WEEK = "_addWeek",
    MONTH = "_addMonth",
    YEAR = "_addYear"
}
