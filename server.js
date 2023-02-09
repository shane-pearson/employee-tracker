const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');
require('dotenv').config();


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

function promptUser() {
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

};


viewEmployees = () => {
    db.query(`SELECT * FROM employee`, (err, res) => {
        console.table(res);
    })
  promptUser()
}


addEmployee = () => {
  inquirer
  .prompt([
    {
      name: `first_name`,
      type: `input`,
      message: `What is the employee's first name?`,
      validate: (firstNameInput) => {
        if (firstNameInput) {
          return true;
        } else {
          console.log("You need to enter the employee's first name!");
          return false;
        }
      },
    },
    {
      name: `last_name`,
      type: `input`,
      message: `What is the employee's last name?`,
      validate: (lastNameInput) => {
        if (lastNameInput) {
          return true;
        } else {
          console.log("You need to enter the employee's last name!");
          return false;
        }
      },
    },
    {
      name: `role_id`,
      type: `input`,
      message: `What is the employee's role id?`,
      validate: (employeeRoleIdInput) => {
        if (employeeRoleIdInput) {
          return true;
        } else {
          console.log("You need to the employee's role!");
          return false;
        }
      },
    },
    {
      name: `manager_id`,
      type: `input`,
      message: `What is the employee's manager's id`,
      validate: (managerNameIdInput) => {
        if (managerNameIdInput) {
          return true;
        } else {
          console.log("You need the employee's manager!");
          return false;
        }
      },
    },
  ])
  .then((answers) => {
    console.log(answers);
    const sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";
    const params =[answers.first_name, answers.last_name, answers.role_id, answers.manager_id];

    db.query(sql, params, function (err, results) {
      if (err) throw err;
      console.log(results);
      promptUser();
    });
  });
};

updateEmployee = () => {
 
  
};

viewRole = () => {
  db.query(`SELECT * FROM role`, (err, res) => {
    console.table(res);
})
promptUser()
    
}

addRole = () => {
  db.query("SELECT role.title AS Title, role.salary AS Salary FROM role",   function(err, res) {
    inquirer.prompt([
        {
          name: "Title",
          type: "input",
          message: "What is the roles Title?"
        },
        {
          name: "Salary",
          type: "input",
          message: "What is the Salary?"

        } 
    ]).then(function(res) {
        db.query(
            "INSERT INTO role SET ?",
            {
              title: res.Title,
              salary: res.Salary,
            },
            function(err) {
                if (err) throw err
                console.table(res);
                promptUser();
            }
        )
      });
    });
  }

viewDepartment = () => {
  db.query(`SELECT * FROM department`, (err, res) => {
    console.table(res);
})
promptUser()
    
}

addDepartment = () => {
  let questions = [
    {
      type: "input",
      name: "name",
      message: "what is the new department name?"
    }
  ];

  inquirer.prompt(questions)
  .then(response => {
    const query = `INSERT INTO department (name) VALUES (?)`;
    db.query(query, [response.name], (err, res) => {
      if (err) throw err;
      console.log(`Successfully inserted ${response.name} department at id ${res.insertId}`);
      promptUser();
    });
  })
  .catch(err => {
    console.error(err);
  });
    
}

function quit () {
  prompt.ui.close();
}


promptUser()




