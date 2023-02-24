// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type : "input",
        name : "Github",
        message : "What is your GitHub username?",
        validate : input => {
            if (input){
                return true;
            } else {
                console.log('Please enter username');
                return false;
            }
        }
      },
      {
        type : "input",
        name : "Email",
        message : "What is your Email?",
        validate : input => {
            if (input){
                return true;
            } else {
                console.log('Please enter Email');
                return false;
            }
        }
      },
    {
    type : "input",
    name : "title",
    message : "What is the title of your project?",
    validate : input => {
        if (input){
            return true;
        } else {
            console.log('Please enter a title');
            return false;
        }
    }
  },
  
  {
    type : "input",
    name : "description",
    message : "What is the project description?",
    validate : input => {
        if (input){
            return true;
        } else {
            console.log('Please enter a description');
            return false;
        }
    }

  },
  {
    type : "input",
    name : "installion",
    message : "What  are installing intsruction?",
    validate : input => {
        if (input){
            return true;
        } else {
            console.log('Please enter instruction');
            return false;
        }
    }
  },
  {
    type : "input",
    name : "usage",
    message : "what will be the usage information ?",
    validate : input => {
        if (input){
            return true;
        } else {
            console.log('Please enter  ');
            return false;
        }
    }
  },
  {
    type : "input",
    name : "Guidelines",
    message : "What is your contribution Guidelines?",
    validate : input => {
        if (input){
            return true;
        } else {
            console.log('Please enter a Guidelines');
            return false;
        }
    }
  },

  
  {
    type : "input",
    name : "fileName",
    message : "Please specify where you would like to save your README file by providing the file path and file name?",
    validate : input => {
        if (input){
            return true;
        } else {
            console.log('Please enter file path');
            return false;
        }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new promises((resolve, reject))
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
