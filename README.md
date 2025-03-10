
# On and On [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

On and On implements a CI/CD pipeline using GitHub Actions. It runs Cypress component tests on pull requests to the develop branch, and deploys the application to Render when develop is merged into main.  
  
  
[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/) [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) [![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/) [![Render](https://img.shields.io/badge/Render-CI/CD-blue)](https://dashboard.render.com/web/srv-cu83ke3v2p9s73c772n0)  


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

1. Change to the project's root directory  
2. Install the dependency modules: npm install  
3. Build: npm run build  
4. Configure the MongoDB database:  
  
- Create a server/.env (refer to the .env.EXAMPLE located there)  
5. Seed the database: npm run seed

## Usage

1. Change to the project's root directory  
2. Start the application: npm run start:dev  
3. Refer to the [Tests](#tests) section to execute the Cypress tests.  
4. See the [spec](client/assets/docs/spec.md) for details of the original requirements  
* See the [Solid Guess Walkthrough video](https://drive.google.com/file/d/1xETFAwS45cJ-MPmlHr3GEqDM5AXR7gRr/view?usp=drive_link)  
* ![Solid Guess screenshot](client/assets/images/screenshot.png)

## License

This application is covered under the [MIT](https://opensource.org/licenses/MIT) license

## Contributing

Guidelines:  
Ensure your code follows the project's coding standards.  
Write clear and concise commit messages.  
If your changes include new features, please update the documentation accordingly.  
If you are fixing a bug, please include a test to verify the fix.  
Thank you for your contributions!

## Tests

Test instructions:  
1. Change to the project's root directory  
2. Cypress requires the application under test to be running (see [Usage](#usage))  
3. Run the tests in console mode: npm run test  
4. To launch the test runner UI instead use: npm run test-gui

## Questions

If you have any questions, feel free to reach out: 
- GitHub: [clintsrc](https://github.com/clintsrc)  
- Email: clinton.alan.jones@gmail.com

