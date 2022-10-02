//node modules
const inquirer = require("inquirer");
//const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What's is the project title ?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
  ])
  .then((answers) => console.log(answers));
