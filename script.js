//complete this code
class Person {
	constructor(name, age){
		this.name = name
		this.age = age
	}
	getName(){
		return this.name
	}
	setAge(age){
		
	}
}

class Student extends Person {
	super()
	study(){
		console.log(this.name, "is studing")
	}
}

class Teacher extends Person {
	super()
	teach(){
		console.log(this.name, "is teaching")
	}
}

const person = new Person("John", 25);
console.log(person.name); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
