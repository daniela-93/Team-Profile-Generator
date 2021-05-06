const Engineer = require("../lib/engineer") 

//need to change engineer object to engineer 
test('creates a new enemy object', () => {
  const engineer = new Engineer('Steve','55','steve@gmail.com','Steve1234');
  expect(engineer.name).toBe('Steve');


  });
    
  test('returns engineers id', () => {
    const engineer = new Engineer('Steve','55','steve@gmail.com','Steve1234');  
    expect(engineer.id).toBe('55');
    
  });
  

  test('returns engineers email', () => {
    const engineer = new Engineer('Steve','55','steve@gmail.com','Steve1234');  
    expect(engineer.email).toBe('steve@gmail.com');

  });

  test('returns engineers github username', () => {
    const engineer = new Engineer('Steve','55','steve@gmail.com','Steve1234');  
    expect(engineer.github).toBe('Steve1234');
    
  });