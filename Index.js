const fs = require("fs");
const path = require("path");
const inquirer = require('inquirer');


const promptUser = () => {
return inquirer.prompt([

    {
      type: 'input',
      name: 'Name ',
      message: 'What is the Managers name?'
    },
    {
      type: 'input',
      name: 'Email',
      message: 'Provide Managers email'
    },
    {
      type: 'input',
      name: 'ID number ',
      message: 'Manager ID',
      choices: ['25']
    }
]);
}


promptUser()
  .then(promptProject)
  .then(portfolioData => {
    // const pageHTML = generatePage();

    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);

    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
  });
