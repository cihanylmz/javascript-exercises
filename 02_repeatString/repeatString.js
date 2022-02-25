const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    
    let finalValue = "";
    while (num > 0) {
        finalValue += string;
        num--;
    }
    return finalValue;
};

// Do not edit below this line
module.exports = repeatString;
