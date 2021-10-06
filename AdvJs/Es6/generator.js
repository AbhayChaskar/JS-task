function *generator()
{
    console.log("Invoke First");
    yield 1;
    console.log("Invoke Second");
    yield 2;
    return 3;
}
let gen=generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());