"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Units = exports.UNITS = exports.TimeDivider = void 0;
var TimeDivider = /** @class */ (function () {
    function TimeDivider(startTime, endTime) {
        if (endTime === void 0) { endTime = Date.now(); }
        this.startTime = startTime;
        this.endTime = endTime;
    }
    TimeDivider.prototype.divide = function (interval, unit) {
        if (unit === void 0) { unit = UNITS.MILLISECOND; }
        var chunks = [];
        for (var currTime = this.startTime; currTime < this.endTime;) {
            var next = this._add(currTime, interval, unit);
            chunks.push({
                start: currTime,
                end: Math.min(next, this.endTime) - 1,
            });
            currTime = next;
        }
        return chunks;
    };
    TimeDivider.prototype._add = function (time, interval, unit) {
        return this[unit](time, interval);
    };
    TimeDivider.prototype._addMillisecond = function (time, interval) {
        return time + interval;
    };
    TimeDivider.prototype._addSeconde = function (time, interval) {
        return time + interval * 1000;
    };
    TimeDivider.prototype._addMinute = function (time, interval) {
        return time + interval * 1000 * 60;
    };
    TimeDivider.prototype._addHour = function (time, interval) {
        return time + interval * 1000 * 60 * 60;
    };
    TimeDivider.prototype._addDay = function (time, interval) {
        return time + interval * 1000 * 60 * 60 * 24;
    };
    TimeDivider.prototype._addWeek = function (time, interval) {
        return time + interval * 1000 * 60 * 60 * 24 * 7;
    };
    TimeDivider.prototype._addMonth = function (time, interval) {
        return new Date(new Date(time).setMonth(new Date(time).getMonth() + interval)).getTime();
    };
    TimeDivider.prototype._addYear = function (time, interval) {
        return new Date(new Date(time).setFullYear(new Date(time).getFullYear() + interval)).getTime();
    };
    return TimeDivider;
}());
exports.TimeDivider = TimeDivider;
var UNITS;
(function (UNITS) {
    UNITS["MILLISECOND"] = "_addMillisecond";
    UNITS["SECOND"] = "_addSeconde";
    UNITS["MINUTE"] = "_addMinute";
    UNITS["HOUR"] = "_addHour";
    UNITS["DAY"] = "_addDay";
    UNITS["WEEK"] = "_addWeek";
    UNITS["MONTH"] = "_addMonth";
    UNITS["YEAR"] = "_addYear";
})(UNITS = exports.UNITS || (exports.UNITS = {}));
var Units;
(function (Units) {
    Units["Millisecond"] = "_addMillisecond";
    Units["Second"] = "_addSeconde";
    Units["Minute"] = "_addMinute";
    Units["Hour"] = "_addHour";
    Units["Day"] = "_addDay";
    Units["Week"] = "_addWeek";
    Units["Month"] = "_addMonth";
    Units["Year"] = "_addYear";
})(Units = exports.Units || (exports.Units = {}));
