const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z]/g, "")

    for (let i = 0; i < Math.round(str.length / 2); i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i))
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;


// filter str to have only alphabetic characters

//remove whitespaces
// filter non alphabetic character
// to lower case
