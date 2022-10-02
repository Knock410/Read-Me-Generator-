//node modules
const inquirer = require("inquirer");
//const fs = require("fs");

inquirer
  .prompt([
    //Github UserName
    {
      type: "input",
      name: "GitHub Name",
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
      name: "Email",
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
      name: "Description",
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
      type: "checkbox",
      name: "License",
      message: "What badges does your project have?",
      choices: [
        "Tori",
        "AssetSonar",
        "SofTrack",
        "Zylo",
        "Zentitle",
        "Alloy Navigator",
      ],
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
      name: "Installation",
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
      name: "Usage",
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
      name: "Contributing",
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
  ])
  .then((answers) => console.log(answers));
