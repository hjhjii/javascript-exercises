const repeatString = function (string, num) {
    if (num < 0)
        return "ERROR";
    if (num == 0)
        return "";
    if (num == 1)
        return string;
    return string + repeatString(string, --num);
};

// Do not edit below this line
module.exports = repeatString;
