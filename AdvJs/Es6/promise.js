const mypromise=new Promise((resolve,reject)=>{
let age=16;
if(age>18)
{
    setTimeout(()=>{
        resolve("Elligible")
    },2000)
}
else{
    reject("Not Applicable")
}
})
mypromise
.then(res=>{
    console.log(res);
})
.then(rej=>{
    console.log(rej);
})