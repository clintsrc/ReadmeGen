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
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

const DEBUG = true;

const banner = `
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
    "On and On",
    "On and On implements a CI/CD pipeline using GitHub Actions to run Cypress tests for development branch Pull Requests, and to execute deployments when development branches are merged into the main branch.    [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) [![Express.js](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)  [![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)  [![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)  ",
    "1. Change to the project's root directory  2. Install the dependency modules: npm install  3. Build: npm run build  4. Configure the MongoDB database:    - Create a server/.env (refer to the .env.EXAMPLE located there)  5. Seed the database: npm run seed",
    "1. Change to the project's root directory  2. Start the application: npm run start:dev  3. Refer to the [Tests](#tests) section to execute the Cypress tests.  4. See the [spec](client/assets/docs/spec.md) for details of the original requirements  * See the [Solid Guess Walkthrough video](https://drive.google.com/file/d/1xETFAwS45cJ-MPmlHr3GEqDM5AXR7gRr/view?usp=drive_link)  * ![Solid Guess screenshot](client/assets/images/screenshot.png)",
    "mit",
    "Guidelines:  Ensure your code follows the project's coding standards.  Write clear and concise commit messages.  If your changes include new features, please update the documentation accordingly.  If you are fixing a bug, please include a test to verify the fix.  Thank you for your contributions!",
    "Test instructions:  1. Change to the project's root directory  2. Cypress requires the application under test to be running (see [Usage](#usage))  3. Run the tests in console mode: npm run test  4. To launch the test runner UI instead use: npm run test-gui",
    "clintsrc",
    "clinton.alan.jones@gmail.com",
  ];
}

// An array of prompts used by the inquirer module
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
    default: defaultAnswers[0],
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of the project:",
    default: defaultAnswers[1],
  },
  {
    type: "input",
    name: "installSteps",
    message: "Enter the steps to install the application:",
    default: defaultAnswers[2],
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how to use the application:",
    default: defaultAnswers[3],
  },
  {
    type: "list",
    name: "license",
    message: "Would you like to include a license?",
    choices: [
      { name: "None", value: "" },
      { name: "Apache 2.0", value: "apache2" },
      { name: "BSD 3-Clause", value: "bsd" },
      { name: "Creative Commons CC BY 4.0", value: "cc" },
      { name: "Eclipse EPL 1.0", value: "epl" },
      { name: "GNU GPL v3", value: "gpl" },
      { name: "MIT", value: "mit" },
      { name: "Mozilla Public License 2.0", value: "mpl" },
    ],
    default: defaultAnswers[4],
  },
  {
    type: "input",
    name: "contributing",
    message: "Describe guidelines for contributions:",
    default: defaultAnswers[5],
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
    default: defaultAnswers[6],
  },
  {
    type: "input",
    name: "questionsGitHubAcct",
    message:
      "Do you want to enter your github account to add to the Questions section?",
    default: defaultAnswers[7],
  },
  {
    type: "input",
    name: "questionsEmail",
    message:
      "Do you want to enter your email account to add to the Questions section?",
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
