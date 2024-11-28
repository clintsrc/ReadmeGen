/*
 * README.md: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
 * 
 */

// NPM packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const banner = 
`=========================gi=================================
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
        message: 'What is the project title?',
        default: 'ReadmeGen', // Default answer
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project:',
        default: 'ReadmeGen uses nodejs and the "inquirer" dependency package to prompt you for information used to generate a README.md file for your GitHub project.', // Default answer
    },
    {
        type: 'input',
        name: 'installSteps',
        message: 'Enter the steps to install the application:',
        default: '1. Change the project\'s root directory\n2. Install the dependency modules: npm install', // Default answer
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use the application:',
        default: '1. Run: node index.js\n2. Answer the prompts\n3. View the generated README.md', // Default answer
    },
    {
        type: 'list',
        name: 'license',
        message: 'Would you like to include a license?',
        choices: [
            { name: 'None', value: '' },
            { name: 'Apache 2.0', value: 'apache2' },
            { name: 'BSD 3-Clause', value: 'bsd' },
            { name: 'Creative Commons CC BY 4.0', value: 'cc' },
            { name: 'Eclipse EPL 1.0', value: 'epl' },
            { name: 'GNU GPL v3', value: 'gpl' },
            { name: 'MIT', value: 'mit' },
            { name: 'Mozilla Public License 2.0', value: 'mpl' },
        ],
        default: 'bsd',  // DEBUG Preselected
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
         console.log("DEBUG:", answers);
        let readmeContent = generateMarkdown(answers);   // TODO
        writeToFile(outFileName, readmeContent);
}   )
    .catch((err) => console.error(err));
}

// Function call to initialize app.
init();
