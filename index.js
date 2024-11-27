/*
 * README.md: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
 * 
 */

// NPM packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const banner = 
`==========================================================
ReadmeGen
==========================================================
Welcome to ReadmeGen! You will receive several prompts for 
information that will be used to dynamically generate a 
professional README.md file that you can include with your 
source control repository.
`;

// An array of questions for user input via the inquirer module
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'What is your location?',
    },
];

// Write the dynamically generated content to the README.md file. 
// Use a document template to organize and update the README 
// content with the answers that were provided
const generateReadme = ({ name, location}) => {
    let outFileName = "README.md";

    let data = `TODO Hi, my name's ${name}, I'm in ${location}`;

    fs.writeFile(outFileName, data, (err) => {
        if (! err) {
            console.log(`Successfully wrote to file! ${outFileName}`);
        } else {
            console.log(`Error writing to file! ${outFileName}`);
        }
    });
}


// Initialize app to prompt the user for the README content and
//    to write to the README.md
function init() {
    console.log(banner);

    generateMarkdown("");   // TODO

    inquirer
    .prompt(questions)
    .then((answers) => generateReadme(answers))
    .catch((err) => console.error(err));
}

// Function call to initialize app.
init();
