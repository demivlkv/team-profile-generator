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
        }
    ])
    .then(managerData => {
        console.log(managerData);
    })
};

// display questions for engineer info
const addEmployee = () => {
    console.log(`
=================
Add a Team Member
=================
	`);
	return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add a team member?',
            choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: employeeName => {
                if (employeeName) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID number.",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter a valid ID number!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the e-mail address of the employee.',
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log('Please enter an e-mail address!');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub username.",
            when: (choice) => choice.role === 'Add Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username!');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
            when: (choice) => choice.role === 'Add Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school!');
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(employeeData => {
        teamArray.push(employeeData);
        if (employeeData.addEmployee) {
            return addEmployee();
        } else {
            console.log(employeeData);
        }
    })
};

// initialize app
addManager()
    .then(employeeData => {
        return addEmployee(employeeData)
    });