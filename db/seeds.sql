USE employee_tracker;

INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('HR'),
    ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Service', 100000, 1),
    ('L7 Engineer', 120000, 2),
    ('HR Manager', 80000, 3),
    ('Risk Management', 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Brad', 'cooper', 1, NULL),
    ('Denzel', 'Washington', 2, 1),
    ('Willy', 'Wonka', 3, 1),
    ('Chris', 'Tucker', 4, 1);
