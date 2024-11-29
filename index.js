/*
 * ReadmeGen
 * 
 * Generates markdown for a source repository README determined
 * by the user's reponses to various prompts.
 * 
 * The README.md template used is based on: 
 *    https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
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

// Default answers for testing and debugging
const defaultAnswers = [
    'ReadmeGen',
    'ReadmeGen uses nodejs and the "inquirer" dependency package to prompt you for information used to generate a README.md file for your GitHub project.',
    '1. Change the project\'s root directory\n2. Install the dependency modules: npm install',
    '1. Run: node index.js\n2. Answer the prompts\n3. View the generated README.md',
    'gpl',
    'Guidelines:  Ensure your code follows the project\'s coding standards.  Write clear and concise commit messages.  If your changes include new features, please update the documentation accordingly.  If you are fixing a bug, please include a test to verify the fix.  Thank you for your contributions!',
    'Test instructions:  1. Try generating a README with license, and another that has no license (select None)',
    'TODO:',
];

// An array of prompts used by the inquirer module
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        default: defaultAnswers[0],
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project:',
        default: defaultAnswers[1],
    },
    {
        type: 'input',
        name: 'installSteps',
        message: 'Enter the steps to install the application:',
        default: defaultAnswers[2],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use the application:',
        default: defaultAnswers[3],
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
        default: defaultAnswers[4],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Describe guidelines for contributions:',
        default: defaultAnswers[5],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
        default: defaultAnswers[6],
    },
    {
        type: 'input',
        name: 'questions',
        message: 'TODO:',
        default: defaultAnswers[7],
    },
];


/*
 * writeToFile()
 *
 * Write dynamically generated content to the README.md file.
 * Report success, or failure if detected
 *
 */
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (! err) {
            console.log(`Successfully wrote to file! ${fileName}`);
        } else {
            console.log(`Error writing to file! ${fileName}`);
        }
    });

}


/*
 * init()
 *
 * Initialize the app to prompt the user for the README content and
 *
 */
function init() {
    const outFileName = "README.md";
    console.log(banner);

    inquirer
    .prompt(questions)
    .then((answers) => {
        // For testing:
        console.log("DEBUG:", answers);
        let readmeContent = generateMarkdown(answers);
        writeToFile(outFileName, readmeContent);
}   )
    .catch((err) => console.error(err));
}

// The app starts here
init();
