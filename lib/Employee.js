class Employee {
    constructor(id, fullName, email ) {
      this.id = id;
      this.fullName = fullName;
      this.email = email;
    }

    // TEST CASE: returning name from input
    getName () {
      return this.fullName;
  }

  // TEST CASE: returning ID from input
  getId () {
      return this.id;
  }   

  // TEST CASE: returning email from input
  getEmail () {
      return this.email;
  }

  // TEST CASE: returning employee type 
  getRole () {
      return 'Employee'; 
  }
  
    printInfo() {
      console.log(`${this.fullName} is a ${this.role}, their email is ${this.email} and their ID is ${this.id}`);
    }
  };
  module.exports = Employee;