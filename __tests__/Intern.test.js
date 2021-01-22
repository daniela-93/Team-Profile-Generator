const Intern = require('../lib/Intern');

test('creates a new enemy object', () => {
    const intern = new intern("intern", "id", "email", "school");
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.name.length).toBeGreaterThan(O);
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email.length).toEqual(expect.any(Number));
    expect(intern.school).toEqual(expect.any(String));
  

  });

  test("returns interns school", () => {
    const intern = new intern("intern", "email","id", "school" );
  
    expect(intern.getSchool()).toBe("school");
   
  });