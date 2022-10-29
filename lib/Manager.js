const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, fullName, email, officeNumber) {
      // call employee constructor class
      super(id, fullName, email);
      this.officeNumber = officeNumber;
     
    }

    // overridden to return `Manager`
    getRole() { 
      // return "Manager";
      this.role = "Manager";
    } 
    printInfo() {
      console.log(`${this.fullName} is a ${this.role}, their email is ${this.email}, office is ${this.officeNumber} and their ID is ${this.id}`);
    }
  }

  module.exports = Manager;