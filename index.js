// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdowns');
const path = require('path');

// TODO: Create an array of questions for user input
//const questions = [];
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?"
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['NFL', 'SportsIO API', 'Giphy API','None']
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
    default: 'Git commands'
  }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(inquirerResponses => {
    console.log('Generating README...');
    writeToFile('./answers/README.MD', generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();