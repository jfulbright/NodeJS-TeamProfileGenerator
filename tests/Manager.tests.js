// using Manager constructor 
const Manager = require('../lib/Manager');
const employeeFields = ((1, 'Jeremy', 'jfulbright@gmail.com', 22));

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager(employeeFields);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager(employeeFields);

    expect(manager.getRole()).toEqual("Manager");
}); 