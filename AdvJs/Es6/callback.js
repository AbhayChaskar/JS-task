function calling(){
    console.log("First Call");
    setTimeout(()=>console.log("TimeOut Interval"),2000);
    console.log("Second Call");
}
calling()