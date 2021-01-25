const fs= require('fs');


const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


const promptUser = [];

const questions= 
   inquirer.prompt([
  {

  ///Manager// 

      type: 'input',
      name: 'Name',
      message: 'What is the Managers name?',
      validate: nameInput => {
         if (nameInput){
           return true;

         }else {
           console.log('Please enter Managers name');
           return false;
         }
        }
        },
        {
   
          type:'input',
          name: 'Id',
          message: 'What is the Managers Id?',
          validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log('You must enter an ID number!');
              return false;
            }
    
          
          }
  
    },
    {
   
      type:'input',
      name: 'email',
      message: 'What is the Managers email?',
      validate: emailInput => {
        if(emailInput){
        return true;
        } else {
          console.log('You must enter a valid email address!');
        }
      }
        
      
      },
      {
     
        type:'input',
        name: 'office',
        message: 'What is the Managers office number?',
      }
    ])
