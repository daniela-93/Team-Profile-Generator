const Employee = require("../lib/Employee.js") 


//need to change employee object to employee 
test('creates a new employee object', () => {
  const employee = new Employee('Dave','45','davey@gmail.com');
  expect(employee.name).toBe('Dave');

});

test('returns id number of Employee', () => {
  const employee = new Employee('Dave','45','davey@gmail.com');
 expect(employee.id).toBe('45');


});

test('return email address of Employee', () => {
  const employee = new Employee('Dave','45','davey@gmail.com');
 expect(employee.email).toBe('davey@gmail.com');

});



