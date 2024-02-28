// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray =[]
  let addEmp = true;
  while (addEmp) {
    const firstName = window.prompt(`Please the first name of the given employee`) // Will prompt user for their first name "window.prompt" referenced from MDN
    const lastName = window.prompt(`Please enter the last name of the given employee`) // Will prompt user for their last name
    const salary = parseInt(window.prompt(`Please enter the salary`)); // Will prompt user for their salary 
    
    // Creates an employee object with the input data
    const employees = {firstName, lastName, salary}; 
    // pushes the newly created object in an array
    employeesArray.push(employees); 
    // Asks the user if they would like to add another employee?
    addEmp = window.confirm(`Would you like to input another employee?`); 
  }
  //console.log(employeesArray);
    return employeesArray;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSal = 0;
  for ( let i = 0; i < employeesArray.length; i++ ) {
    totalSal += employeesArray[i].salary // Will sum up all of the employee salaries
  }
  average = totalSal/employeesArray.length; // Will take an average of the employee salaries
  return console.log(`$${average} is the average salary of our (${employeesArray.length}) employees`); //returns avg salary of employees that have been entered into the array
} 

// Select a random employee -- built in math object referenced from MDN 
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`CONGRATS, ${randomEmployee.firstName} ${randomEmployee.lastName} , YOU are are the winner of a brand new CAR!`);
};

//====================
//    STARTER CODE
//Do not modify any of the code below this line:

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
