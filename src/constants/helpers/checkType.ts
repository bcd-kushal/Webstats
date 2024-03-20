// type check ======================================================
const checkIsObject =   (x:any) => { return(Object.prototype.toString.call(x)==='[object Object]'?true:false)}
const checkIsArray =    (x:any) => { return(Object.prototype.toString.call(x)==='[object Array]'?true:false)}

