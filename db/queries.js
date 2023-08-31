const db = require('../config/connection.js');

class DB {
  constructor() {
    this.db = db;
  }

  // View all departments
  viewAllDepartments() {
    return new Promise((resolve, reject) => {
      this.db.query('SELECT * FROM department', function(err, results) {
        if (err) reject(err);
        console.table(results);
        resolve();
      });
    });
  }

  // View all roles
  viewAllRoles() {
    return new Promise((resolve, reject) => {
      this.db.query('SELECT * FROM role', function(err, results) {
        if (err) reject(err);
        console.table(results);
        resolve();
      });
    });
  }

  // View all employees
  viewAllEmployees() {
    return new Promise((resolve, reject) => {
      this.db.query('SELECT * FROM employee', function(err, results) {
        if (err) reject(err);
        console.table(results);
        resolve();
      });
    });
  }

  // Add a department
  addDepartment(name) {
    return new Promise((resolve, reject) => {
      this.db.query('INSERT INTO department SET ?', { name: name }, function(err, results) {
        if (err) reject(err);
        console.log('Department added successfully!');
        resolve();
      });
    });
  }

  // Add a role
  addRole(title, salary, departmentId) {
    return new Promise((resolve, reject) => {
      this.db.query('INSERT INTO role SET ?', { title: title, salary: salary, department_id: departmentId }, function(err, results) {
        if (err) reject(err);
        console.log('Role added successfully!');
        resolve();
      });
    });
  }

  // Add an employee
  addEmployee(firstName, lastName, roleId, managerId) {
    return new Promise((resolve, reject) => {
      this.db.query('INSERT INTO employee SET ?', { first_name: firstName, last_name: lastName, role_id: roleId, manager_id: managerId }, function(err, results) {
        if (err) reject(err);
        console.log('Employee added successfully!');
        resolve();
      });
    });
  }

  // Update an employee role
  updateEmployeeRole(employeeId, newRoleId) {
    return new Promise((resolve, reject) => {
      this.db.query('UPDATE employee SET ? WHERE ?', [{ role_id: newRoleId }, { id: employeeId }], function(err, results) {
        if (err) reject(err);
        console.log('Employee role updated successfully!');
        resolve();
      });
    });
  }
}

module.exports = DB;
