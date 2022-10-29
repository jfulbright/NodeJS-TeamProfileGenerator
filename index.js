const Employee = require('./lib/Employee'); // importing Employee.js
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// 1. Create an Employee object using the Employee Constructor
Employees = new Employee(1, "Jeremy Employee", "jfulbright@gmail.com");
Employees.getRole();
Employees.printInfo();


// 2. Create an Manager object by extending the Employee Constructor
Managers = new Manager(2, "Jeremy Manager", "jfulbright@gmail.com", "Office123");
Managers.getRole();
Managers.printInfo();

// 3. Create an Manager object by extending the Employee Constructor
Engineers = new Engineer(3, "Jeremy Engineer", "jfulbright@gmail.com", "github/jeremyfulbright");
Engineers.getRole();
Engineers.printInfo();

// 4. Create an Manager object by extending the Employee Constructor
Interns = new Intern(4, "Jeremy Intern", "jfulbright@gmail.com", "NAU");
Interns.getRole();
Interns.printInfo();