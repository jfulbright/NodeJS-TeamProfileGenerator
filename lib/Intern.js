const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
      this.school = school;
     
    }

    getSchool() {
      console.log(this.school);
    }


    getRole() {
      this.role = "Intern";
      console.log(this.role);
    }; // overridden to return `Intern`
  }

  module.exports = Intern;