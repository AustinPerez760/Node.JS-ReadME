const fs = require ('fs');
const inquirer = require ('inquirer');



// array of questions for user
function nodePrompt () {
  return inquirer.prompt([
        {
            type: "input", 
            message: "What is the title of your ReadMe?",
            name: "Title", 
        },
        {   type: "input",
            message: "Please enter a description of your project", 
            name: "Description",
        },
        {
            type: "input",
            message: "List instaliation steps if needed", 
            name: "Instalation",
        },
        {
            type: "input",
            message: "Usage Information", 
            name: "Usage", 
        },
        {
            type: "input",
            message: "Contribution Guidelines", 
            name: "Contributions", 
        },
        {
            type: "input", 
            message: "Test Instructions",
            name: "Tests",
        },
        {
            type:"list",
            message: "select license",
            choices: [
                "MIT",
                "GVL-GPL 3.0",
                "APACHE 2.0",
                "BSD 3",
                "None",
            ]

        }

   
    ])};


    //const questions = [

//];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName,data,err => {
        if (err) {
            throw err;
        }
    });
        
    
}

// function to initialize program
function init() {
    
}

// function call to initialize program
init();
