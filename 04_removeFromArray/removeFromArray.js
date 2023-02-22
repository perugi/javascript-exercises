const removeFromArray = function (array, ...values) {
    for (value of values) {
        index = array.indexOf(value);
        // indexOf returns -1 if the value is not found in the array.
        if (index >= 0) {
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
