class Employee {
    constructor(id, fullName, email ) {
      this.id = id;
      this.fullName = fullName;
      this.email = email;
    }

    getName() {
    console.log(this.fullName);
    }


    getID() {
    console.log(this.id);
    };

    getEmail() {
    console.log(this.email);
    };

    getRole() {
        // return "Employee"
        this.role = this.role
    };
  
    printInfo() {
      console.log(`${this.fullName} is a ${this.role}, their email is ${this.email} and their ID is ${this.id}`);
    }
  }
  module.exports = Employee;