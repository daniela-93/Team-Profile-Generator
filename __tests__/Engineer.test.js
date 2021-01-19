const Engineer = require("../lib/engineer") 

//need to change engineer object to engineer 
test('creates a new enemy object', () => {
    const engineer = new engineer("engineer", "email", "githubUsername");
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.name.length).toBeGreaterThan(O);
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.email.length).toEqual(expect.any(Number));
  

  });
  
  test("returns engineers github username", () => {
    const engineer = new engineer("engineer", "email", "githubUsername" );
  
    expect(engineer.getGithub()).toBe("githubusername");
    expect(engineer.getGithub()).toBe("engineer.github");

  
  
    
  });
  