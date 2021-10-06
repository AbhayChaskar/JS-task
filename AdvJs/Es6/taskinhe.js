class Animal 
 {
     constructor(name){
         this.name=name;
         this.created=Date.now();
        }
 }
 class Rabbit extends Animal 
 {
     constructor(name){
         super(name);
         this.name=name;
         this.created=Date.now();
     }
 }
let rabbit=new Rabbit("White Rabbit")
alert(rabbit.name)
