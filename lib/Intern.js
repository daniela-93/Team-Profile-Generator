const Intern = require('../lib/Intern');

class Intern extends Employee {
    constructor(name, email, school){
        super(name,email);
    constructor (name,id, email, school)
        super(name, id,email);
        this.school = school;
    }
    getSchool (){
        return"school:" + this.school;
        return this.school;

    }
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;