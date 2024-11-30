/*
 * renderLicenseBadge()
 *
 * A function that returns a license badge based on which license is passed in
 * The badge formatted string is: [BADGE](URL)
 *    e.g. 
 * [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 *
 * If there is no license, return an empty string
 * 
 */

function renderLicenseBadge(license) {
  let licenseBadge = '';
  const licenseLink = renderLicenseLink(license);

  if (license) {

    switch (license) {
      case 'apache2':
        licenseBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
        break;
      case 'bsd':
        licenseBadge = "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
        break;
      case 'cc':
        licenseBadge = "![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)";
        break;
      case 'epl':
        licenseBadge = "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
        break;
      case 'gpl':
        licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
        break;
      case 'mit':
        licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
        break;
      case 'mpl':
        licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
        break;
      // default is already an empty string, no default case is needed
    }
   // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    licenseBadge = `[${licenseBadge}](${licenseLink})`;

  }

  return licenseBadge;
}


/*
 * renderLicenseLink()
 *
 * A function that returns the license link if the user chose one
 * 
 * If there is no license, return an empty string
 * 
 */

function renderLicenseLink(license) {
  let licenseLink = '';

  if (license) {

    switch (license) {
      case 'apache2':
        licenseLink = "https://opensource.org/licenses/Apache-2.0";
        break;
      case 'bsd':
        licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
        break;
      case 'cc':
        licenseLink = "https://creativecommons.org/licenses/by/4.0/";
        break;
      case 'epl':
        licenseLink = "https://opensource.org/licenses/EPL-1.0";
        break;
      case 'gpl':
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
        break;
      case 'mit':
        licenseLink = "https://opensource.org/licenses/MIT";
        break;
      case 'mpl':
        licenseLink = "https://opensource.org/licenses/MPL-2.0";
        break;
      // default is already an empty string, no default case is needed
    }

  }

  return licenseLink;
}


/*
 * renderLicenseSection()
 *
 * A function that returns the license section for the README entitled 
 * License that explains which license the application is covered under
 * and it links the license url
 * 
 * If there is no license, return an empty string
 * 
 */

function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  let licenseNameText = '' // a friendly name for the link text
  let licenseSectionText = '';

  if (license) {

    switch (license) {
      case 'apache2':
        licenseNameText = 'Apache 2.0';
        break;
      case 'bsd':
        licenseNameText = 'BSD 3-Clause';
        break;
      case 'cc':
        licenseNameText = 'Creative Commons CC BY 4.0';
        break;
      case 'epl':
        licenseNameText = 'Eclipse EPL 1.0';
        break;
      case 'gpl':
        licenseNameText = 'GNU GPL v3';
        break;
      case 'mit':
        licenseNameText = 'MIT';
        break;
      case 'mpl':
        licenseNameText = 'Mozilla Public License 2.0';
        break;
      // default is already an empty string, no default case is needed
    }

    licenseSectionText = `This application is covered under the [${licenseNameText}](${licenseLink}) license`;
  }
  return licenseSectionText;
}


/*
 * renderQuestionsSection()
 *
 * A function that returns the Questions section for the README to 
 * that reaches out to answer any questions by optionally providing a 
 * github account with a link to that GitHub profile, and another option for
 * an email account that provides a mailto link
 * 
 * If neither contact option is provided the Questions section is empty
 * 
 */
function renderQuestionsSection(ghUser, emailUser) {
  let questionsSectionText = '';
  if ((ghUser) || (emailUser)) {
    questionsSectionText = "If you have any questions, feel free to reach out: \n";

    if (ghUser) {
      questionsSectionText += `- GitHub: [${ghUser}](https://github.com/${ghUser})  \n`;
    }

    if (emailUser) {
      questionsSectionText += `- Email: ${emailUser}`;
    }
  }
  return questionsSectionText;
}


/*
 * renderLicenseSection()
 *
 * a function to generate markdown for the README using data from
 * user input
 * 
 * If the user specified a license:
 *  - a badge for that license is added near the top of the README
 *  - a License section is added to the readme
 * 
 */

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license)
  const questionsSection = renderQuestionsSection(data.questionsGitHubAcct, data.questionsEmail);;

  // regex to replace all double spaces with 
  //   double-spaces ( {2}) and a line feed: this is the markup convention 
  //   for linefeeds
  let description = data.description.replace(/ {2}/g, "  \n");
  let installSteps = data.installSteps.replace(/ {2}/g, "  \n");
  let usage = data.usage.replace(/ {2}/g, "  \n");
  let tests = data.tests.replace(/ {2}/g, "  \n");
  let contributing = data.contributing.replace(/ {2}/g, "  \n");

  // populate a template literal string with the user input to
  // represent the README content, then return the content here
  return `
# ${data.title} ${licenseBadge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${installSteps}

## Usage

${usage}

## License

${licenseSection}

## Contributing

${contributing}

## Tests

${tests}

## Questions

${questionsSection}

`;
}

export default generateMarkdown;
