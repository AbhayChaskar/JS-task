var calc=function(){
    return{
        add:function(a,b)
        {
            return(a+b)
        },
        sub:function(a,b)
        {
            return(a-b)
        },
        mul:function(a,b)
        {
            return(a*b)
        },
        div:function(a,b)
        {
            return(a/b)
        }
    }
};
var obj=new calc();
console.log(obj.add(10,20))
console.log(obj.sub(20,10))
console.log(obj.mul(10,20))
console.log(obj.div(10,20))

