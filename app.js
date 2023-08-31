const inquirer = require('inquirer');
const db = require('./config/connection.js');
const DB = require('./db/queries.js');

// initialize the database methods
const datebase = new DB();

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    })
    .then(function(answer) {
      // based on their answer, either call the corresponding function
      switch (answer.action) {
        case 'View all departments':
          datebase.viewAllDepartments().then(() => start());
          break;

        case 'View all roles':
          datebase.viewAllRoles().then(() => start());
          break;

        case 'View all employees':
          datebase.viewAllEmployees().then(() => start());
          break;

        case 'Add a department':
          inquirer.prompt([
            {
              type: 'input',
              message: 'What is the department name?',
              name: 'name',
            },
          ]).then((answers) => {
            datebase.addDepartment(answers.name).then(() => start());
          });
          break;

        case 'Add a role':
          inquirer.prompt([
            {
              type: 'input',
              message: 'What is the role name?',
              name: 'title',
            },
            {
              type: 'input',
              message: 'What is the salary for this role?',
              name: 'salary',
            },
            {
              type: 'input',
              message: 'What is the department ID for this role?',
              name: 'departmentId',
            },
          ]).then((answers) => {
            datebase.addRole(answers.title, answers.salary, answers.departmentId).then(() => start());
          });
          break;

        case 'Add an employee':
          inquirer.prompt([
            {
              type: 'input',
              message: 'What is the first name of the employee?',
              name: 'firstName',
            },
            {
              type: 'input',
              message: 'What is the last name of the employee?',
              name: 'lastName',
            },
            {
              type: 'input',
              message: 'What is the role ID of the employee?',
              name: 'roleId',
            },
            {
              type: 'input',
              message: 'What is the manager ID of the employee?',
              name: 'managerId',
            },
          ]).then((answers) => {
            datebase.addEmployee(answers.firstName, answers.lastName, answers.roleId, answers.managerId).then(() => start());
          });
          break;

        case 'Update an employee role':
          inquirer.prompt([
            {
              type: 'input',
              message: 'What is the employee ID you want to update?',
              name: 'employeeId',
            },
            {
              type: 'input',
              message: 'What is the new role ID for this employee?',
              name: 'newRoleId',
            },
          ]).then((answers) => {
            datebase.updateEmployeeRole(answers.employeeId, answers.newRoleId).then(() => start());
          });
          break;

        case 'Exit':
          process.exit();
      }
    });
}

module.exports = { start };
