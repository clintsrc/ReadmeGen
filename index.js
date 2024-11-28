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
        name: 'title',
        message: 'What is the title?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'What is your location?',
    },
];


// Write the dynamically generated content to the README.md file. 
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (! err) {
            console.log(`Successfully wrote to file! ${fileName}`);
        } else {
            console.log(`Error writing to file! ${fileName}`);
        }
    });

}


// Initialize app to prompt the user for the README content and
//    to write to the README.md
function init() {
    const outFileName = "README.md";
    console.log(banner);

    inquirer
    .prompt(questions)
    .then((answers) => {
        let readmeContent = generateMarkdown(answers);   // TODO
        writeToFile(outFileName, readmeContent);
}   )
    .catch((err) => console.error(err));
}

// Function call to initialize app.
init();
