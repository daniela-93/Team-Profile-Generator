
class Employee {
constructor( name, id, email) {
        this.name= name;
        this.id= id;
        this.email= email;
 }

        getname(){
                return this.name;
        }
        
        getID() {
                return this.id;
        }
        getEmail() {
                return this.email;
        }

        getRole() {
                return "Emmployee";
        }
    
}

module.exports = Employee;
