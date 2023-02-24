import inquirer from 'inquirer';

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What's your name?"
    },
    {
        type: 'list',
        name: 'color',
        message: 'What is your favorite color?',
        choices: ['Red', 'Blue', 'Green', 'Yellow']
    }
]).then(answers => {
    console.log(`Hello ${answers.name}, your favorite color is ${answers.color}`);
});
