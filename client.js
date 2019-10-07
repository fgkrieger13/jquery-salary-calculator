console.log('js');

$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');
    $('#submitButton').on('click', salaryFunction);
    $('tbody').on('click', '.delete', deleteFunction);
}
let monthlySalary = 0;
var employees = [];
function salaryFunction(){
    let nameFirst = $('#firstName').val();
    let nameLast = $('#lastName').val();
    let idNum = $('#identity').val();
    let title = $('#title').val();
    let annSalary = $('#annSalary').val();

    let employeeInfo= {
        empFirst: nameFirst,
        empLast: nameLast,
        empId: idNum,
        empTitle: title,
        empSalary: annSalary
    };
    employees.push(employeeInfo);
    console.log(employees)

    $('tbody').append(`
    <tr>
            <td class = 'empFirst'>`+ (nameFirst) +`</td>
            <td>`+ (nameLast) +`</td>
            <td>`+ (idNum) +`</td>
            <td>`+ (title) +`</td>
            <td class = 'salary'>`+ (annSalary) +`</td>
            <td class = 'delete'><button>Delete</button></td>
     </tr>`)
     $('#firstName').val('');
     $('#lastName').val('');
     $('#identity').val('');
     $('#title').val('');
     $('#annSalary').val('');
         
     monthlySalary = (annSalary/12) + monthlySalary;

     $('#salaryCount').text(Number(monthlySalary));

}



function deleteFunction(){
    console.log('delete');
    $(this).closest('tr').remove();
    
    let name = $(this).siblings('.empFirst').text();
     console.log(name)

    let salary = $(this).siblings('.salary').text();
    console.log(salary)

    for (let j = 0; j < employees.length; j++) {
        if(employees[j].name === name){
        employees.splice(name, j)
        }
    }
    
    monthlySalary = monthlySalary - (salary/12);
    $('#salaryCount').text(Number(monthlySalary));
   
}