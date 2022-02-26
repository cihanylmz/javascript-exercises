
//Solution 1

/*const removeFromArray = function(...toBeRemovedArr) {
    
    for (const toBeRemoved of toBeRemovedArr)
    {
        let index = fullArr.indexOf(toBeRemoved);
        if (index >= 0) fullArr.splice(index, 1);
    }
    return fullArr;
    
};*/

//Solution 2

var removeFromArray = function(...args) {
    const array = args[0]
    return array.filter(val => !args.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
