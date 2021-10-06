function *iteration()
{
    let i=0;
    while(true)
    {
        yield i++;
        return 4;   
    }
}
let gen=iteration();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
