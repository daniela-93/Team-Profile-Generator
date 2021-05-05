
const fs = require("fs");
const inquirer = require("inquirer");
const generateCards = require("./src/generated-page");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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
        name: 'officeNumber',
        message: 'Enter a phone number to reach this person: (Required)',
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

}
const promptIntern = () =>{
  return inquirer.prompt([
  {
    