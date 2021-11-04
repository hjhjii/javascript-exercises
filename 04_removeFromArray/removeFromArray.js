const removeFromArray = function (array) {
    // for (let i = 1; i < arguments.length; i++) {
    //     if (arguments[i] > array.length | typeof arguments[i] === "string")
    //         continue;
    //     array.splice(arguments[i] - 1, 1);
    // }
    let args = Array.from(arguments).slice(1, -1);

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
