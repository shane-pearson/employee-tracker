USE employees_db

INSERT INTO department (name)
VALUES ("Technology"),
       ("Healthcare"),
       ("Hospitality");
     
       
INSERT INTO role (title, salary, department_id)
VALUES ("IT Support", 60000, 1),
       ("Sales", 85000, 2),
       ("Coding", 105000, 1),
       ("Driver", 55000, 3),
       ("Waitress", 45000, 3);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Truman", 1, null),
       ("Tim", "Tom", 1, 1),
       ("Angela", "Pearson", 2, null),
       ("Helen", "Bernard", 2, 3),
       ("Tin", "Tin", 2, 3),
       ("Monica", "Holsom", 2, 3),
       ("Fred", "Mccall", 3, null),
       ("Timothy", "Tiger", 3, 7),
       ("Captain", "America", 3, 7),
       ("Lance", "Vance", 4, null),
       ("Bethany", "Stephanie", 5, null);
       