const inquirer = require('inquirer');
const fs = require('fs');

// need questions to start

const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Managers name?'
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is your team Managers ID?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your Managers office number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Managers Email?'
        },
        {
            type: 'list',
            name: 'addMemeber',
            message: 'what type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((manager) => {
        switch(manager.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
        }
    })
};
questions();