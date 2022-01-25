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
            case 'intern':
                internQuestions();
                console.log(manager);
        }
    })
};
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineer\'s id?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineer\'s GitHub username?',
        },
        {
            type: 'list',
            name: 'addMemeber',
            message: 'what type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((engineer) => {
        console.log(engineer);
    })
};
const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the intern\'s id?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email address?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the intern\'s school?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    console.log(intern);
}
questions();