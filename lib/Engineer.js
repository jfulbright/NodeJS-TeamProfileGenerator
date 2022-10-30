const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, fullName, email, github) {
      // call employee constructor class
      super(id, fullName, email);
      this.github = github;
      this.role = "Engineer"; 
    };
  };

  module.exports = Engineer;