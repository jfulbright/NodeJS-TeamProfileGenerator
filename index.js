
// load node  modulules
const fs = require('fs');
const inquirer = require('inquirer');

// mapping constructor classes and subclasses
const Employee = require('./lib/Employee'); 
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// define objects
const teamArray = [];


// inquirer prompts
    /// manager fields
const promptsManager = [
    {
        type: 'input',
        name: 'fullName',
        message: "Enter Manager's Name:", 
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter Manager's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter Manager's email?",
        
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter Manager's office number",
    }
];

    /// employee fields
const promptsEmployee = [
    {
        type: 'list',
        name: 'role',
        message: "Enter employee's role",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'fullName',
        message: "Enter employee's name?", 
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter employee's ID.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter employee's email.",
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter employee's github username.",
        when: (input) => input.role === "Engineer",
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add more team members?',
        default: false
    }
]

const addManager = () => {inquirer
    .prompt(promptsManager)
    .then((managerFields) =>  {
        const {id, fullName, email, officeNumber} = managerFields;
        // calls subclass and returns object from constructor
        const Managers = new Manager(id, fullName , email, officeNumber);
        teamArray.push(Managers);
        console.log(teamArray);
        return teamArray;
    });
};

const addEmployee = () => {inquirer
    .prompt(promptsEmployee)
    .then((employeeFields) =>  {
        let {id, fullName, email, role, github, school, confirmAddEmployee} = employeeFields;
        let employee;
        
        // switch logic to call correct subclass based on role and return object from constructor
        switch(role) {
        case "Engineer":
            employee = new Engineer (id, fullName, email, github);
            break;
        case "Intern":
            employee = new Intern (id, fullName, email, school);
            break;
        default:
            employee = new Emplyee (id, fullName, email);
        };
        teamArray.push(employee);

        if (confirmAddEmployee) {
            // passes current array objects back into the addEmployee function to append antoher employee object.
            return addEmployee(teamArray) 
        } else {
            // console.log(teamArray);
            return teamArray;
        } 
    });
};


addManager();
// addEmployee();
// .then(addEmployee)
// .catch(err => {
//     console.log(err);
//      });


// // 1. Create an Employee object using the Employee Constructor
//     Employees = new Employee(1, "Jeremy Employee", "jfulbright@gmail.com");
//     Employees.getRole();
//     Employees.printInfo();


// // 2. Create an Manager object by extending the Employee Constructor
//     Managers = new Manager(2, "Jeremy Manager", "jfulbright@gmail.com", "Office123");
//     Managers.getRole();
//     Managers.printInfo();

// // 3. Create an Manager object by extending the Employee Constructor
//     Engineers = new Engineer(3, "Jeremy Engineer", "jfulbright@gmail.com", "github/jeremyfulbright");
//     Engineers.getRole();
//     Engineers.printInfo();

// // 4. Create an Manager object by extending the Employee Constructor
//     Interns = new Intern(4, "Jeremy Intern", "jfulbright@gmail.com", "NAU");
//     Interns.getRole();
//     Interns.printInfo();