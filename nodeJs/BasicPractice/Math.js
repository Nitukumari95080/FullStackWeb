const sum=(a,b)=>a+b;
const sub=(a,b)=>a-b;
const mul=(a,b)=>a*b;
module.exports.pi=3.14

//first method
let obj={
    mul:mul,
}
module.exports=obj;

//second method for export
module.exports={
    sum:sum,
    sub:sub,

}