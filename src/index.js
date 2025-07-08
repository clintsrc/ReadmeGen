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
    "Routine Saga",
    "Routine Saga is a journal app implemented in Django to capture those day to day notes that turn into sagas. It is based on the project provided in [Eric Matthes](https://github.com/ehmatthes/pcc_3e) book, [_Python Crash Course, 3rd Edition_ (No Starch Press)](https://nostarch.com/python-crash-course-3rd-edition)    [![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)](https://www.python.org/) [![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)](https://www.djangoproject.com/) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)  [![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)  [![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)  ",
    "1. Change to the project's root directory  2. Create the virtual environment: make venv  3. Activate the environment:  Windows: source .venv/Scripts/activate  Nonwindows: source .venv/bin/activate  4. Install the dependency modules: pip install -r requirements/local.txt  5. Configure the .envs/.env file for your environment (see .envs/.env.EXAMPLE)  6. Create the database: psql -U postgres -f db/schema.sql  7. Migrate the database: python manage.py migrate  8. Seed the databse: python manage.py seed  ",
    "1. Change to the project's root directory  2. Start the application: python3 manage.py runserver  3. Access the local site at: http://127.0.0.1:8000/  4. See the docs/*.md for detailed notes including deployment steps  * ![Solid Guess screenshot](docs/images/screenshot.png)",
    "mit",
    "Guidelines:  Ensure your code follows the project's coding standards.  Write clear and concise commit messages.  If your changes include new features, please update the documentation accordingly.  If you are fixing a bug, please include a test to verify the fix.  Thank you for your contributions!",
    "Test instructions:  1. Create a new account.  2. Create a new topic.  3. Edit the topic.  4. Create 2 topic entries.  5. Edit an entry.  6. Delete an entry.  7. Delete the topic.",
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
