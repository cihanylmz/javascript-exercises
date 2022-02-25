const reverseString = function(string) {
    //split the string to an array
    let reverseArr = string.split("");
    //reverse the array
    reverseArr.reverse();
    //join the array back into a string.
    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
