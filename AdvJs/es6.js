class Car
{
    constructor(speed)
    {
        this.speed=speed;
    }
    acce()
    {
        this.speed+=60;
    }
    checkspeed()
    {
        console.log('The Speed is:  "${this.speed}');
    }
}

var obj=new Car(60);
obj.checkspeed();
obj.acce();
obj.checkspeed();