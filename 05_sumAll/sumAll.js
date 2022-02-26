const sumAll = function(opOne, opTwo) {
    if (opOne < 0 || opTwo < 0) return "ERROR";
    
    //If not a number, throw ERROR
    if (typeof opOne != 'number' || typeof opTwo != 'number' ) return "ERROR";

    let sum = 0;
    let numCount = Math.abs(opTwo - opOne) + 1;
    for (let i = 0; i < numCount; i++) {
        //Subtract the smaller one from the bigger one.
        sum += (opOne > opTwo ? opTwo : opOne) + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
