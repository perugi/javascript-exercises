const repeatString = function (inString, repeat) {
    if (repeat < 0) return "ERROR";
    let outString = "";

    for (let i = 0; i < repeat; i++) {
        outString += inString;
    }

    return outString;
};

// Do not edit below this line
module.exports = repeatString;
