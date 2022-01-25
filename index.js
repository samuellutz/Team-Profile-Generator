const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

// need questions to start

const managerQuestions = () => {
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
            name: 'addMember',
            message: 'what type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
        // switch to engineer or intern
        .then((managerAnswers) => {
            console.log(managerAnswers)
            const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
            team.push(manager)
            console.log(manager)
            switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
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
            name: 'addMember',
            message: 'what type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    // switch between engineer or intern
    .then((engineerAnswers) => {
        console.log(engineerAnswers)
        const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerID, engineerAnswers.engineerEmail, engineerAnswers.Github)
        team.push(engineer)
        console.log(engineer)
        switch(engineerAnswers.addMember) {
        case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
        console.log(engineer);
        }
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
    // switch between engineer or intern
    .then((internAnswers) => {
        console.log(internAnswers)
        const intern = new Intern(internAnswers.internName, internAnswers.internID, internAnswers.internEmail, internAnswers.internSchool)
        team.push(intern)
        console.log(intern)
        switch(internAnswers.addMember){
        case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
        console.log(Intern);
        }
    })
};


managerQuestions();