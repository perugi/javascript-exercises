const sumAll = function (start, stop) {
    if (typeof start !== "number" || typeof stop !== "number" || start < 0 || stop < 0) return "ERROR";

    let lower, upper;
    if (start <= stop) {
        lower = start;
        upper = stop;
    } else {
        lower = stop;
        upper = start;
    }
    let sum = 0;
    for (let i = lower; i <= upper; i++) {
        sum += i;
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
