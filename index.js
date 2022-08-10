// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// get team profiles
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// push employee info into array
const teamArray = [];

// prompts user to add manager info
const addManager = () => {
    console.log(`
==================
Add a Team Manager
==================
	`);
	return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?',
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team manager's ID number.",
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log('Please enter a valid ID number!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the e-mail address of the team manager.',
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log('Please enter an e-mail address!');
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team manager's office number.",
            validate: managerOfficeNumber => {
                if (managerOfficeNumber) {
                    return true;
                } else {
                    console.log('Please enter a valid number!');
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add a team member?',
            choices: ['Engineer', 'Intern', 'Finish Building Team']
        }
    ])
    .then(employeeData => {
        console.log(employeeData);

        if (employeeData.role === 'Engineer') {
            addEngineer();
        } else if (employeeData.role === 'Intern') {
            addIntern();
        } else {
            return '';
        }
    })
};

// display questions for engineer info
const addEngineer = () => {
    console.log(`
===============
Add an Engineer
===============
	`);
	return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                }
            }
        }
    ])
};

// display questions for intern info
const addIntern = () => {
    console.log(`
=============
Add an Intern
=============
	`);
	return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                }
            }
        }
    ])
};

// initialize app
addManager();