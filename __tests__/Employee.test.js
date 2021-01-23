<<<<<<< HEAD
const checkIfEqual = require('../lib/Employee.js');

test('checks if 10 is equal to 10', () => {
  expect(checkIfEqual(10, 10)).toBe(true);
});
=======
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



>>>>>>> 6b8ab8c9f41dac0749208fc4f75dee3265c9c8f1
