// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./');

// TODO: Create an array of questions for user input
//const questions = [];
const questions = () => {
return inquirer.prompt([
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();