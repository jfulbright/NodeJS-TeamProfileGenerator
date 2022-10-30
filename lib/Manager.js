const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, fullName, email, officeNumber) {
      // call employee constructor class
      super(id, fullName, email);
      this.officeNumber = officeNumber;
      this.role = "Manager";
    };
  };

  module.exports = Manager;