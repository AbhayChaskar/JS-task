function mysum(...args)
{
    let sum=0;
    for(let arg of args)
    {
        sum+=arg;
    }
    return sum;
}
console.log(mysum(2,3,4,5));
console.log(mysum(2,3));
console.log(mysum(2,3,4));
