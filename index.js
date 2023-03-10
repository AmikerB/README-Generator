const inquirer = require('inquirer');
const fs = require('fs');

// function to generate the README from users answers
const generateReadme = (answers) => `
# ${answers.title}

![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)

${answers.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Test](#test)
6. [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is licensed under the ${answers.license} license.

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

If you have additional questions contact me on my [GitHub](https://github.com/${answers.github}) or my email: ${answers.email}
`;

// array of license options
const licenseOptions = [
    'MIT',
    'Apache',
    'GPL',
    'BSD',
    'Unlicense'
];


// array of questions to prompt the user for input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: licenseOptions
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
];

// prompt the user for input
inquirer
    .prompt(questions)
    .then(answers => {
        const markdown = generateReadme(answers);
        // write the Markdown content to a file located within generated-README folder
        fs.writeFile('generated-README/README.md', markdown, (err) =>
            // if error console.log the error if not display the message
            err ? console.error(err) : console.log('README.md file created! Check inside generated-README folder.')
        );
    });