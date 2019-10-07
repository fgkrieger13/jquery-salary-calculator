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
         
     monthlySalary = (annSalary/12) + monthlySalary;

     $('#salaryCount').text(Number(monthlySalary));

}



function deleteFunction(){
    console.log('delete');
    $(this).closest('tr').remove();
    
    
     employees.forEach(function (employee){
        employees.splice(employee, 1);
     })
     
    // let salary = this.closest('tr').index[5]
    // console.log(salary)

    // for (var j = 0; j < employees.length; j++){
    //     if (employees[j].empSalary === ){
    //     let employee = '';
    //     console.log(employee); 
    //     }
    // }

    //console.log(employee)

    //employees.splice(name, 1);

    // monthlySalary = monthlySalary - (employee/12);
    // $('#salaryCount').text(Number(monthlySalary));
   
}