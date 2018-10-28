module.exports = function sumOfOther(arg) {
    return arg.map((val, index) => {
        const emp = Symbol();
        return arg.reduce((acc, val, sum) => {
            return index == sum
                ? acc
                : (acc == emp ? val : acc + val);
        
        }, 
        emp);
    });
}


