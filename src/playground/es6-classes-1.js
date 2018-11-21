class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${ this.age } year(s) old.`;
  }
};

const me = new Person('toolX', 34);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

const student = new Student('Andrey', 28, 'CS');
console.log(student.getDescription());

const otherStudent = new Student('Pete', 29);
console.log(otherStudent.getDescription());
