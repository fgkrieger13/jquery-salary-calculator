console.log('js');

$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');
    $('#submitButton').on('click', salaryFunction);
    $('table').on('click', '.delete', deleteFunction);
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

    $('table').append(`
    <tr>
            <td>`+ (nameFirst) +`</td>
            <td>`+ (nameLast) +`</td>
            <td>`+ (idNum) +`</td>
            <td>`+ (title) +`</td>
            <td>`+ (annSalary) +`</td>
            <td class = 'delete'><button>Delete</button></td>
     </tr>`)
     $('#firstName').val('');
     $('#lastName').val('');
     $('#identity').val('');
     $('#title').val('');
     $('#annSalary').val('');
         
     
}



function deleteFunction(){
    console.log('delete');
    $(this).closest('tr').remove();
    
    for (let index = 0; index < employees.length; index++) {
        console.log(employees[index])
       
   }
}