module.exports = function make(...arg) {
    const counter = arg.length;
    const lastArg = arg[counter - 1];
    if (lastArg instanceof Function) {
        return arg
            .slice(0, counter - 1)
            .reduce(lastArg);
    } else {
        return make.bind(this, ...arg);
    }
}