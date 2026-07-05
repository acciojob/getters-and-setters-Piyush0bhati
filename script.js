//complete this code
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(value) {
        this._name = value;
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(value) {
        this._age = value;
    }
    teach() {
        console.log(`${this.name} is teaching`);
    }
     study() {
        console.log(`${this.name} is studying`);
    }
}

class Student extends Person {
   
}

class Teacher extends Person {
    
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
