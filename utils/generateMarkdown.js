// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("TODO: renderLicenseBadge");

  let licenseBadge = '';

  switch (license) {
    case 'apache2': // https://opensource.org/licenses/Apache-2.0
      licenseBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case 'bsd': // https://opensource.org/licenses/BSD-3-Clause
      licenseBadge = "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      break;
    case 'cc':  // https://creativecommons.org/licenses/by/4.0/
      licenseBadge = "![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)";
      break;
    case 'epl':  // https://opensource.org/licenses/EPL-1.0
      licenseBadge = "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
      break;
    case 'gpl':  // https://www.gnu.org/licenses/gpl-3.0
      licenseBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case 'mit': // https://opensource.org/licenses/MIT
      licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case 'mpl':  // https://opensource.org/licenses/MPL-2.0
      licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      break;
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("TODO: renderLicenseLink");

  let licenseLink = '';

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
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Otherwise return its badge string formatted string: [BADGE](URL)
// e.g. 
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
function renderLicenseSection(license) {
  console.log("TODO: renderLicenseSection");

  let licenseBadge = renderLicenseBadge(license); // returns an empty string if 'None' was selected

  if (licenseBadge) {
    licenseBadge = 
      `[${licenseBadge}](${renderLicenseLink(license)})`
  }

  return licenseBadge;
}

// TODO: Create a function to generate markdown for README
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and 
// a notice is added to the section of the README entitled License that 
// explains which license the application is covered under
function generateMarkdown(data) {
  let licenseBadge = renderLicenseSection(data.license);
  let licenseText = '';
  let licenseTOC = ''

  if (licenseBadge) {
    licenseBadge = `\n${licenseBadge}`;
    licenseText = `## License\nThis application is covered under the ${data.license.toUpperCase()} license`;
    licenseTOC = "\n- [License](#license)";
  }
 
// a notice is added to the section of the README entitled License that 
// explains which license the application is covered under

  return `
# ${data.title}${licenseBadge}

## Description

${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)${licenseTOC}

## Installation

${data.installSteps}

## Usage

${data.usage}

To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    \`\`\`md
    ![alt text](assets/images/screenshot.png)
    \`\`\`

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

${licenseText}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
`;
}

export default generateMarkdown;
