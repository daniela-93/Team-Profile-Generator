

  const Manager = require('../lib/Manager.js');

test('Creates an Manager object', () =>{
    const employee1 = new Manager('Dave',45,'davey@gmail.com',222);

    expect(employee1.name).toBe('Dave');
    expect(employee1.id).toBe(45);
    expect(employee1.email).toBe('davey@gmail.com');
    expect(employee1.officeNumber).toBe(222);
    expect(employee1.getRole()).toBe('Manager');
});