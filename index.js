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

    ])
}
questions();