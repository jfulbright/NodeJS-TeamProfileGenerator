class Employee {
    constructor(id, name, email ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role;
    }

    getName() {
    console.log(this.name);
    }


    getID() {
    console.log(this.id);
    };

    getEmail() {
    console.log(this.email);
    };

    getRole() {
        this.role = "Employee"
        console.log(this.role);
    }; // returns `Employee`
  
    printInfo() {
      console.log(`This Employee has email ${this.email} wheels`);
      console.log(`This Employee has an id of ${this.id}`);
    }
  }
  module.exports = Employee;