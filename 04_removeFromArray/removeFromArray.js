const removeFromArray = function (array, ...args) {
    if (args.length === array.length)
        return [];
    args.forEach(arg => {
        if (typeof arg === "string" && array.indexOf(arg) !== -1) {
            array.splice(array.indexOf(arg), 1, -1);
        }
        else if (typeof arg !== "string" && arg > 0 && arg <= array.length)
            array.splice(arg - 1, 1, -1);
    });

    return array.filter(item => item !== -1);
};

// Do not edit below this line
module.exports = removeFromArray;
