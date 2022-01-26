const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager').default;
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateTeam = require('./src/generateTeam');

// need questions to start
team = [];
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
        }
    ])
    .then((managerAnswers) => {
    
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', generateTeam(team))
        }
    });
};

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'github',
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
        const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github)
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
                writeToFile('dist/index.html', generateTeam(team))
        }
    })
};
const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?'
        },
        {
            type: 'input',
            name: 'school',
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
        const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
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
                writeToFile('dist/index.html', generateTeam(team))
        }
    })
};


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};
managerQuestions()
