const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, fullName, email, school) {
      
      // calling employee class constructor
      super(id, fullName, email)
      this.school = school;
      this.role = "Intern";
    };

    // TEST CASES: returning school 
    getSchool () {
      return this.school;
  }

  // TEST CASES: override employee role to intern
  getRole () {
      return "Intern";
  }


  };

  module.exports = Intern;