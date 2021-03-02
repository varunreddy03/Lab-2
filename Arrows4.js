let Person = function(name,age)
{
	this.name=name;
	this.age=age;
	this.display =function()
	{

	setTimeout( () => {console.log(this.name+" is "+this.age)}, 1000);
}
}
var person1 =new Person("ram",30);
person1.display();