//node modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generatemarkdown = require("./utils/generatemarkdown");

const questions = [
  //Github UserName
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username",
    //validates if the input is provided and acceptable
    validate: (value) => {
      if (value) {
        return true;
      } else {
        console.log("Please enter your Github ussername");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
    //validates if the input is provided and acceptable
    validate: (value) => {
      if (value) {
        return true;
      } else {
        console.log("Please enter your email address");
        return false;
      }
    },
  },
  //title
  {
    type: "input",
    name: "title",
    message: "What's is the project title ?",
    //validates if the input is provided and acceptable
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter project title");
        return false;
      }
    },
  },
  //descripton
  {
    type: "input",
    name: "description",
    message: "Describe your project",
    //validates if the input is provided and acceptable
    validate: (value) => {
      if (value) {
        return true;
      } else {
        console.log("Please enter a short project description");
        return false;
      }
    },
  },
  //license
  {
    type: "list",
    name: "license",
    message: "What type of license does your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],

    //validates if the input is provided and acceptable
    validate: (value) => {
      if (value) {
        return true;
      } else {
        console.log("Please choose all licenses that apply");
        return false;
      }
    },
  },
  //installation
  {
    type: "input",
    name: "installation",
    message: "What command should be ran to install dependencies?",
    //validates if the input is provided and acceptable
    validate: (value) => {
      if (value) {
        return true;
      } else {
        console.log("Please enter the command");
        return false;
      }
    },
  },
  //usage
  {
    type: "input",
    name: "usage",
    message: "Please explain how this project can be used.",
    //validates if the input is provided and acceptable
    validate: (value) => {
      if (value) {
        return true;
      } else {
        console.log("Please enter a short  description");
        return false;
      }
    },
  },
  //contributing
  {
    type: "input",
    name: "contribution",
    message: "How can users contribute to your project",
    //validates if the input is provided and acceptable
    validate: (value) => {
      if (value) {
        return true;
      } else {
        console.log("Please enter a short description");
        return false;
      }
    },
  },
  //test
  {
    type: "input",
    name: "test",
    message: "Please enter a short descripton on how to use your project",
    //validates if the input is provided and acceptable
    validate: (value) => {
      if (value) {
        return true;
      } else {
        console.log("Please enter a short description");
        return false;
      }
    },
  },
];
//Markdown Template

//function to create readme

function writetofile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init(){
  inquirer.prompt(questions).then((inquirerResponses)=>{
    console.log("generating read me!");
    writetofile("readMe.md", generatemarkdown({...inquirerResponses}));
  });
}
//How do I link this function to my inquirer questions ?
//how do I generate badge images of licenses from my inquirer array?
init();