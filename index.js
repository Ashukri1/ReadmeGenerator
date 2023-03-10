// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type : "input",
        name : "github",
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
        name : "contribution",
        message : "please enter contribution",
        validate : input => {
            if (input){
                return true;
            } else {
                console.log('Please enter contributoion');
                return false;
            }
        }
      },
      {
        type : "input",
        name : "email",
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
        type : "list",
        name : "license",
        message : "What license should your project have?",
        choices: ["MIT" , "GPL", "Apache", "None"],
        validate : Licenseinput => {
            if (Licenseinput){
                return true;
            } else {
                console.log("Please enter license used");
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
    name : "guidelines",
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
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then (data => {
        const markdown = generateMarkdown(data);
        writeToFile(data.fileName, markdown);
        console.log("README file generate successfully!");

    })
    .catch(error => console.log(error));
}

// Function call to initialize app
init();
