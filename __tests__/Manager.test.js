

  const Manager = require('../lib/Manager.js');


test('creates a new manager object', () => {
  const manager = new Manager('Dave','45','davey@gmail.com','222');
  expect(manager.name).toBe('Dave');


  });
    
  test('returns manager id', () => {
    const manager = new Manager('Dave','45','davey@gmail.com','222');  
    expect(manager.id).toBe('45');
    
  });
  

  test('returns engineers email', () => {
    const manager = new Manager('Dave','45','davey@gmail.com','222');  
    expect(manager.email).toBe('davey@gmail.com');

  });

  test('returns managers office number', () => {
    const manager = new Manager('Dave','45','davey@gmail.com','222');  
    expect(manager.officeNumber).toBe('222');
    
  });