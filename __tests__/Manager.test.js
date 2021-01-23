const Manager = require ('../lib/Manager.js');


test('creates a new manager object', () => {
    const manager = new Manager('Dave','45','davey@gmail.com','222');
    expect(manager.name).toBe('Dave');
  
  });
  
  test('returns id number of Manager', () => {
    const manager = new Manager('Dave','45','davey@gmail.com','222');
   expect(manager.id).toBe('45');
  
  
  });
  
  test('return email address of Manager', () => {
    const manager = new Manager('Dave','45','davey@gmail.com','222');
   expect(manager.email).toBe('davey@gmail.com');
  
  });
  test('return office number of Manager', () => {
    const manager = new Manager('Dave','45','davey@gmail.com','222');
   expect(manager.office).toBe('222');
  
  });