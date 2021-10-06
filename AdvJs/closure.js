function Outer()
{
    var count=0;
    console.log(count);
    function Inner()
    {
        count++;    
        return count;
    }
    return Inner;
}
var counter=Outer();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
