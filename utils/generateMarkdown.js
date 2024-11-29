/*
TODO:
Video walkthrough:
https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide
*/

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
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseSection = renderLicenseSection(data.license);

  // populate a template literal string with the user input to
  // represent the README content, then return the content here
  return `
# ${data.title} ${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${data.installSteps}

## Usage

${data.usage}

![alt text](assets/images/screenshot.png)


## Credits

TODO
List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${licenseSection}

## Contributing

TODO
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
TODO

## Questions

TODO:
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
`;
}

export default generateMarkdown;
