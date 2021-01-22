const Manager = require('..lib/Manager');


class Manager extends Employee { 
    constructor(name, email) 
    {
        super(name,email) 
        this.officenumber= 0;

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber; 
 
    }

getOfficeNumber() {
    return this.officeNumber;
   

}
getRole() {
    return "Manager";

}
    }

module.exports = Manager;