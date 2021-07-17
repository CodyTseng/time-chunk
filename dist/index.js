"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNITS = exports.TimeChunk = void 0;
var TimeChunk = /** @class */ (function () {
    function TimeChunk(startTime, endTime) {
        if (endTime === void 0) { endTime = Date.now(); }
        this._startTime = startTime;
        this._endTime = endTime;
    }
    TimeChunk.prototype.chunk = function (interval, unit) {
        if (unit === void 0) { unit = UNITS.MILLIONSECOND; }
        var chunks = new Array();
        for (var currTime = this._startTime; currTime < this._endTime;) {
            var next = this._add(currTime, interval, unit);
            chunks.push({
                start: currTime,
                end: Math.min(next - 1, this._endTime)
            });
            currTime = next;
        }
        return chunks;
    };
    TimeChunk.prototype._add = function (time, interval, unit) {
        switch (unit) {
            case UNITS.MILLIONSECOND:
                return this._addMillionSecond(time, interval);
            case UNITS.SECOND:
                return this._addSeconde(time, interval);
            case UNITS.MINUTE:
                return this._addMinute(time, interval);
            case UNITS.HOUR:
                return this._addHour(time, interval);
            case UNITS.DAY:
                return this._addDay(time, interval);
            case UNITS.WEEK:
                return this._addWeek(time, interval);
            case UNITS.MONTH:
                return this._addMonth(time, interval);
            case UNITS.YEAR:
                return this._addYear(time, interval);
        }
    };
    TimeChunk.prototype._addMillionSecond = function (time, interval) {
        return time + interval;
    };
    TimeChunk.prototype._addSeconde = function (time, interval) {
        return time + interval * 1000;
    };
    TimeChunk.prototype._addMinute = function (time, interval) {
        return time + interval * 1000 * 60;
    };
    TimeChunk.prototype._addHour = function (time, interval) {
        return time + interval * 1000 * 60 * 60;
    };
    TimeChunk.prototype._addDay = function (time, interval) {
        return time + interval * 1000 * 60 * 60 * 24;
    };
    TimeChunk.prototype._addWeek = function (time, interval) {
        return time + interval * 1000 * 60 * 60 * 24 * 7;
    };
    TimeChunk.prototype._addMonth = function (time, interval) {
        return new Date(new Date(time).setMonth(new Date(time).getMonth() + interval)).getTime();
    };
    TimeChunk.prototype._addYear = function (time, interval) {
        return new Date(new Date(time).setFullYear(new Date(time).getFullYear() + interval)).getTime();
    };
    return TimeChunk;
}());
exports.TimeChunk = TimeChunk;
var UNITS;
(function (UNITS) {
    UNITS["MILLIONSECOND"] = "ms";
    UNITS["SECOND"] = "s";
    UNITS["MINUTE"] = "m";
    UNITS["HOUR"] = "h";
    UNITS["DAY"] = "D";
    UNITS["WEEK"] = "W";
    UNITS["MONTH"] = "M";
    UNITS["YEAR"] = "Y";
})(UNITS = exports.UNITS || (exports.UNITS = {}));
