const Intern = require('../lib/Intern');

test('creates a new enemy object', () => {
    const intern = new Intern('Sarah', '25', 'sarah@gmail.com', 'University of Texas');
    expect(intern.name).toBe('Sarah');
  
  });


test('returns id number of Intern', () => {
  const intern = new Intern('Sarah', '25', 'sarah@gmail.com', 'University of Texas')
  expect(intern.id).toBe('25');

});
  test('return email of intern', () => {
    const intern = new Intern('Sarah', '25', 'sarah@gmail.com', 'University of Texas');
   expect(intern.email).toBe('sarah@gmail.com');
  
  });

  
test('return school of intern', () => {
  const intern = new Intern('Sarah', '25', 'sarah@gmail.com', 'University of Texas');
 expect(intern.school).toBe('University of Texas');

});