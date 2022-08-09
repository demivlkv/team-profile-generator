// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// team profiles
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// push employee info into array
const teamArray = [];

// prompts user to add name, id, & email of employee
const addEmployee = () => {
	return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter an ID number of the employee.',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid number!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the e-mail address of the employee.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an e-mail address!');
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
};

// if employee role is manager, then ask these questions

// if employee role is engineer, then ask these questions

// if employee role is intern, then ask these questions

// initialize app
addEmployee();