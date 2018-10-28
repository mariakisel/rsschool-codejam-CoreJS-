module.exports = function recursion() {
    if(Object.result==undefined)Object.result=[];
        let p=[[],[],[]];
        for (let i=0;i<arguments.length;i++){
            if(arguments[i]!=[])p[0].push(arguments[i]['value']);
                if("left" in arguments[i]) {
                    p[1].push(arguments[i]["left"]);
                    p[3]=1;
                }
                else p[1].push ([]);
                if("right" in arguments[i]){ 
                    p[1].push(arguments[i]["right"]);
                    p[3]=1;
            }
         else p[1].push ([]);
        }
    Object.result.push(p[0]);
    if(p[3]>0)recursion(...p[1]);
        return Object.result;
}
    

