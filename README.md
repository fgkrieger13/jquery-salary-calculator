# jQuery Salary Calculator
- Create an application that records employee salaries and adds salaries up to report monthly costs.

## Description

- create an 'index.html', 'client.js, 'style.css', 'jQuery.js'https://jquery.com/download/, and bootstrap
- source scripts to html and link css/bootstrap
- console log 'js' and create a readyNow function to console log 'JQ'
- format the html
    - create an h1 with "Salary Calculator" written in it
    - create an h2 with "Add Employee"
    - create an h3 with inputs for all 5 button with ids for each input
    - create an h4 for the submit button and make a button element with an id
    - create a table
        - create table headings
        - hard code in a row and check the DOM to make sure things show up
        - create a row with 6 td's with separate ids and a delete button in the sixth
        - create a table footer
    - make a div underneath the table with "Monthly Amount:" and give a unique id
-  create listners for submit and delete buttons in the ready now function
- create a variable for monthly salary and set it equal to 0
- create an empty array for employees
- create a salary function
    - make sure the function name matches the function name in the submit button listner
    - make variables for each of your input fields and set them equal to the ids values
    - create an employeeInfo object with five strings for each input and set them equal to your variables
    - push employeeinfo to employees array
    - append a row into your table with 5 tds each equal to your variables and a 6th with a delete button class and delete button
    - empty all of your input fields
    - solve for monthly salary by using your input salary variable
    - .text the new monthly salary to the DOM
- create a delete function
    - make sure the function name matches the function name in the delete button listner
    - use (this).closest to remove the row you click on from the table
- style with css

- Thanks to prime academy for helping me start this project
- if you have any issues feel free to email me at fgkrieger13@gmail.com

Additional README details can be found [here](https://github.com/PrimeAcademy/github-finalization-assignment).