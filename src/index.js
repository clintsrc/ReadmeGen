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

const DEBUG = true;

const banner =
    `
==========================================================
ReadmeGen
==========================================================
Welcome to ReadmeGen! You will receive several prompts for 
information that will be used to dynamically generate a 
professional README.md file that you can include with your 
source control repository. Use double-spaces to indicate
line breaks.
`;

// Default answers for testing and debugging
let defaultAnswers = [];

if (DEBUG) {
    defaultAnswers = [
        'Shark',
        'A candidate search application that calls the GitHub API and renders data in the browser.',
        '1. Create a [GitHub Personal Access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token).  2. Add the token to an .env file in the environment folder as VITE_GITHUB_TOKEN. The included .env.EXAMPLE file can be used as an example.  3. Change the project\'s root directory  4. Install the dependency modules: npm install',
        '1. Change the project\'s root directory  2. Run: npm run dev  3. Browse to the running app at: http://localhost:3000/  * See my active Shark site deployed on Render [here](https://shark-b07k.onrender.com/)  Note that it takes a couple of minutes to spin up  ![Shark screenshot](assets/images/screenshot.jpg)',
        'mit',
        'Guidelines:  Ensure your code follows the project\'s coding standards.  Write clear and concise commit messages.  If your changes include new features, please update the documentation accordingly.  If you are fixing a bug, please include a test to verify the fix.  Thank you for your contributions!',
        'Test instructions:  1. Try using the reject and save buttons on the search page.  2. On the saved page ensure the list is updated from the search page additons.  3. Try the image and email links.  4. Try removing candidates until the list is empty.  5. Test the sort opton.  6. Try filtering on text in one of the bio fields.  7. Try filtering on a nonexisting text string.  8. Clear the filter to be sure the saved candidates are visible again.',
        'clintsrc',
        'clinton.alan.jones@gmail.com',
    ];
}

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
        name: 'questionsGitHubAcct',
        message: 'Do you want to enter your github account to add to the Questions section?',
        default: defaultAnswers[7],
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Do you want to enter your email account to add to the Questions section?',
        default: defaultAnswers[8],
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
        if (!err) {
            console.log(`Successfully written! ${fileName}`);
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
            if (DEBUG) {
                console.log("answers array:", answers);
            }
            let readmeContent = generateMarkdown(answers);
            writeToFile(outFileName, readmeContent);
        })
        .catch((err) => console.error(err));
}

// The app starts here
init();
