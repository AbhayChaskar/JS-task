let salary={"abhay":20000,"akshay":30000,"anuj":10000}

function topSalary(salary)
{
    var max=0;
    var topper="null";
    for(let name in salary)
    {
        if(salary[name]>max)
        {
            max=salary[name];
            topper=name;
        }
    }
    console.log("Topper is "+topper);
}
topSalary(salary);