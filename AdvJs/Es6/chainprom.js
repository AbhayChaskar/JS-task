let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(20),2000);
    })
    prom.then(res=>{
        console.log(res);
        return res*3;
    })
    .then(res=>{
        console.log(res);
        return res*3;
    })
    .then(res=>{
        console.log(res);
    })