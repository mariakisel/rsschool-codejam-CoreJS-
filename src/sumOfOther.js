module.exports = function sumOfOther(args) {
    return args.map((val, index) => {
        const emptySymbol = Symbol();
        return args.reduce((acc, val, sumIndex) => {
            return index == sumIndex
                ? acc
                : (acc == emptySymbol ? val : acc + val);
        
        }, emptySymbol);
    });
}


