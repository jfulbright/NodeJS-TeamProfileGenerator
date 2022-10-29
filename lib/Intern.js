const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, fullName, email, school) {
      
      // calling employee class constructor
      super(id, fullName, email)
      this.school = school;
     
    }

    getSchool() {
      console.log(this.school);
    }

 // overridden to return `Intern`
    getRole() {
      // return "Intern";
      this.role = "Intern";
      console.log(this.role);
    };

    printInfo() {
      console.log(`${this.fullName} is a ${this.role}, their email is ${this.email}, office is ${this.school} and their ID is ${this.id}`);
    }
  }

  module.exports = Intern;