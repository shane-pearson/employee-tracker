const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.PW,
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

db.connect(err => {
    if (err) throw err
})

// function promptUser() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'name',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
      },
    ]) .then (answers => {
        if (answers.name == 'View All Employees') {
          viewEmployees()
        } else if (answers.name == 'Add Employee') {
          addEmployee()
        } else if (answers.name == 'Update Employee Role') {
          updateEmployee()
        } else if (answers.name == 'View All Roles') {
          viewRole() 
        } else if (answers.name == 'Add Role') {
          addRole()
        } else if (answers.name == 'View All Departments') {
          viewDepartment()
        } else if (answers.name == 'Add Department') {
          addDepartment() 
        } else {
          quit()
        }
    }) 

// };


viewEmployees = () => {
    db.query(`SELECT * FROM employee`, (err, res) => {
        console.table(res);
    })
  promptUser()
}

addEmployee = () => {

    
}

updateEmployee = () => {

    
}

viewRole = () => {

    
}

addRole = () => {

    
}

viewDepartment = () => {

    
}

addDepartment = () => {

    
}

quit = () => {

    
}


promptUser()




