const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, fullName, email, github) {
      // call employee constructor class
      super(id, fullName, email);
      this.github = github;
     
    }

    // overridden to return `Manager`
    getRole() { 
      // return "Engineer";
      this.role = "Engineer";
    } 
    printInfo() {
      console.log(`${this.fullName} is a ${this.role}, their email is ${this.email}, office is ${this.github} and their ID is ${this.id}`);
    }
  }

  module.exports = Engineer;