  
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

const employees = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your team managers name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your managers name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter this persons ID number (Required)',
      validate: idInput => {
        if (idInput){
          return true;
        }
        else{
          console.log('Please enter a valid ID!');
          return false;
        }
      }
    },
    {
        message: 'Please enter your email',
        name: 'email',
        type: 'input',
        default: () => {},
        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
      },
      { type: 'input',
        name: 'officeNumber',
        message: 'Enter this managers office number (Required)',

        validate: idInput => {
          if (idInput){
            return true;
          }
          else{
            console.log('Please enter a valid ID!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false
      }
  ])
}
//Engineer // 
const promptEngineer = () =>{
  return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the engineers name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your engineers name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter this persons ID number (Required)',
    validate: idInput => {
      if (idInput){
        return true;
      }
      else{
        console.log('Please enter a valid ID!');
        return false;
      }
    }
  },
  {
      message: "Please enter your email",
      name: "email",
      type: "input",
      default: () => {},
      validate: function (email) {

          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

          if (valid) {
              return true;
          } else {
              console.log(".  Please enter a valid email")
              return false;
          }
      }
    },
      {
        type: 'input',
        name: 'gitHub',
        message: 'Enter this persons gitHub username: (Required)',
        validate: idInput => {
          if (idInput){
                return true;
          }
          else{
            console.log('Please enter a gitHub username!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false
      }
  ])
//Intern//
}
const promptIntern = () =>{
  return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the interns name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your interns name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter this persons ID number (Required)',
    validate: idInput => {
      if (idInput){
        return true;
      }
      else{
        console.log('Please enter a valid ID!');
        return false;
      }
    }
  },
  {
      message: "Please enter your email",
      name: "email",
      type: "input",
      default: () => {},
      validate: function (email) {

          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

          if (valid) {
              return true;
          } else {
              console.log(".  Please enter a valid email")
              return false;
          }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school is the Intern attending: (Required)',
      validate: idInput => {
        if (idInput){
              return true;
        }
        else{
          console.log('Please enter a valid school!');
          return false;
        }
      }
    },
    
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false
      }
    ])
}
const promptAddEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Select the additional employees role? (Required)',
      choices: ['Intern', 'Engineer']  
    }
  ])
  .then(employeeData =>{
      if(employeeData.role == "Intern"){
          promptIntern()
          .then(internData =>{
              const intern1 = new Intern(internData.name, internData.id, internData.email, internData.school);
              employees.push(intern1);
              if(internData.confirmAddEmployee){
                  promptAddEmployee()
              } else{
                writeToFile(employees);
                console.log("Checkout the generated page from the dist folder!");
              }
          })
      }
      else{
          promptEngineer()
          .then(engiData =>{
              const engi1 = new Engineer(engiData.name, engiData.id, engiData.email, engiData.gitHub);
              employees.push(engi1);
              if(engiData.confirmAddEmployee){
                  promptAddEmployee()
              } else{
                writeToFile(employees);
                console.log("Checkout the generated page from the dist folder!");
              }
          })
      }
  })
}
const generatePage = require('./src/page-template.js');

const writeToFile = function(passedData){
fs.writeFile('./dist/GeneratedPage.html', generatePage(employees), err =>{
    if(err) throw err;
    console.log('Page complete! Check out GeneratedPage.html to see the output!');
})
}
promptUser()
  .then(memberData => {
    const manager1 = new Manager(memberData.name, memberData.id, memberData.email, memberData.officeNumber);
    employees.push(manager1);
    if(memberData.confirmAddEmployee){
        promptAddEmployee()
    } else{
        writeToFile(employees);
        console.log("Checkout the generated page from the dist folder!");
    }
  })