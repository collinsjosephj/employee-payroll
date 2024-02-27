// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray =[]
  let more = true;
  while (more === true) {
  const firstName = window.prompt("Please enter your first name") // Will prompt user for their first name "window.prompt" referenced from MDN
  const lastName = window.prompt("Please enter your last name") // Will prompt user for their last name
  const salary= window.prompt("Please enter your salary"); // Will prompt user for their salary 

  }
  employeesArray.push(employee);
  console.log(employeesArray);
  return employeesArray;
};
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let total = 0;
  let average = 0;
  for ( let i = 0; i < employeesArray.length; i++ ) {
    total += employeesArray[i].salary // Will compile all of the employee salaries
    average = total/employeesArray.length // Will average the employee salaries by the total amt of employees in array
  }
    return average;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(randomEmployee);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
