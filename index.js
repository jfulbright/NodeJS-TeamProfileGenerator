const Employee = require('./Employee');
const Manager = require('./Manager');
const Intern = require('./Intern');

// 1. Create an Employee object using the Employee Constructor
Employee = new Employee(1, "Jeremy", "jfulbright@gmail.com");
Employee.getName();
Employee.getID();
Employee.getEmail();
