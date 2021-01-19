const Employee = require("../lib/Employee") 



//need to change employee object to employee 
test('creates a new employee object', () => {
  const employee = new Employee("Dave", "jl@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name.length).toBeGreaterThan(O);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.email.length).toEqual(expect.any(Number));

});

test("returns the name property of Employee", () => {
  const employee = new Employee("Dave", "jkl@gmail.com");

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("returns id number of Employee", () => {
  const employee = new employee("Dave", "jkl@gmail.com");

  expect(employee.getId()).toEqual('employee.id');

});

test("return email address of Employee", () => {
  const employee = new employee("Dave", "jkl@gmail.com" );

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employedd.email.toString())
  );


  
});

test("returns role which should be 'Employee' or whatever the child class's role is"  , () => {
  const employee = new employee("Dave", "jkl@gmail.com");

  expect(employee.getRole()).toEqual(expect.stringContaining(employee.constructor.name)
  );
  

});


