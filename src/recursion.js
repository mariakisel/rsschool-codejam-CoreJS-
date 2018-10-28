module.exports = function recursion(...arg) {
    const s = 0;
    t = 1,
    k = 2,
    args = arg;
    if (!Array.isArray(args[s])) {
      args[1] = args[s];
      args[s] = [];
    }
    const p = [[], [], []];
    for (let i = 1; i < args.length; i += 1) {
      if (args[i] !== [])p[s].push(args[i].value);
      if ('left' in args[i]) { 
          p[t].push(args[i].left); p[k] = 1; 
     } 
      else p[t].push([]);
      if ('right' in args[i]) {
           p[t].push(args[i].right); p[k] = 1; } else p[t].push([]);
     }
    args[s].push(p[s]);
    if (p[k] > 0)recursion(args[s], ...p[t]);
    return args[s];
};