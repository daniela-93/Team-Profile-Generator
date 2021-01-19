const Engineer = require('..lib/Employee');


class Engineer extends Employee { 
    constructor(name, email, github) {
        super(name,email);
    this.github =github;
    }

getGithub(){
    return "Github"+ this.github;
    return this.github;

}
getRole() {
    return "Engineer";

}
}

module.exports = Engineer;