const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, fullName, email, github) {
      // call employee constructor class
      super(id, fullName, email);
      this.github = github;
      this.role = "Engineer"; 
    };

    // TEST CASES: returning github from input 
    getGithub () {
      return this.github;
  }

   // EST CASES: override employee role to engineer
  getRole () {
      return "Engineer";
  }
  };

  module.exports = Engineer;