

const managerArray = (teamArray) => teamArray.filter(
    function(employee) {
        return employee.role === 'Manager';
    }
);

const employeeArray = (teamArray) => teamArray.filter(
    function(employee) {
        return employee.role === 'Intern';
    }
);



// Create main html
const html = [];
var managers = [];
var employees = [];
const renderMain = (teamArray) => {
managers = managerArray(teamArray);
console.log(`managersArray: ${managers[0].fullName}`);
employees = employeeArray(teamArray);
console.log(`employeeArray:${employees[0].fullName}`);



};


module.exports = renderMain;