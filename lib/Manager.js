const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
      this.officeNumber = officeNumber;
     
    }

    getGithub() {
      console.log(this.getGithub)
    };


    getRole() { // overridden to return `Engineer`
      this.role = "Engineer";
      console.log(this.role);
    } 
  }

  module.exports = Manager;