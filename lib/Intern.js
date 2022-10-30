const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, fullName, email, school) {
      
      // calling employee class constructor
      super(id, fullName, email)
      this.school = school;
      this.role = "Intern";
    };
  };

  module.exports = Intern;