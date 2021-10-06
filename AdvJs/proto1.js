function Employee(name)
{
    this.name=name;
}
Employee.prototype.details=function()
{
    console.log("My Name is "+this.name);
}
var emp=new Employee("Abhay Chaskar");
emp.details();