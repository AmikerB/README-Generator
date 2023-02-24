import inquirer from 'inquirer';
import axios from 'axios';
import generateMarkdown from './generateMarkdown.js';

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
    }
];

// prompt the user for input
// prompt the user for input
inquirer
    .prompt(questions)
    .then(answers => {
        // retrieve data from the GitHub API
        axios.get(`https://api.github.com/users/${answers.github}`)
            .then(response => {
                // add GitHub information to the answers object
                answers.avatar = response.data.avatar_url;
                answers.profile = response.data.html_url;

                // generate the Markdown content for the README file
                const markdown = generateMarkdown(answers);

                // write the Markdown content to a file
                fs.writeFile('README.md', markdown, err => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log('README.md file created!');
                    }
                });
            })
            .catch(error => {
                console.error(error);
            });
    });