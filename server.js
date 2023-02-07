const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

const promptUser = () => {
    return inquirer.prompt([
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

};

viewEmployees = () => {


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

























app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });