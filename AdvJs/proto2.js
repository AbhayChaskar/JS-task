function Car()
{
    this.speed=60;
}
Car.prototype.acce=function()
{
    this.speed+=60;
}
Car.prototype.checkspeed=function()
{
    console.log("The Speed is:  "+this.speed);
}
var obj=new Car();
obj.checkspeed();
obj.acce();
obj.checkspeed();