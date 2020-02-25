
exports.min = function min (array) {
    let result = 0;
    if (array == undefined || array.length == 0) {
        return result;
    }
    for (let i of array) {
        if (i < result) {
            result = i;
        }
    }
    return result;
}

exports.max = function max (array) {
    let result = 0;
    if (array == undefined || array.length == 0) {
        return result;
    }
    for (let i of array) {
        if (i > result) {
            result = i;
        }
    }
    return result;
}

exports.avg = function avg (array) {
    let result = 0;
    if (array == undefined || array.length == 0) {
        return result;
    }
    let sum = 0;
    for (let i of array) {
        sum = sum + i;
    }
    result = sum / array.length;
    return result;
}
