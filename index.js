//node modules
const inquirer = require("inquirer");
//const fs = require("fs");

inquirer
  .prompt([
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
  ])
  .then((answers) => console.log(answers));
