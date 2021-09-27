import React from 'react';
const Status = (props) => {
    const employees = props.selectedEmployees;
    let totalSalary = 0;
    let totalEmployees = [];
    for (const employee of employees) {
        totalSalary += employee.salary;


    }

    totalEmployees = employees.map(employee => <div key={employee.id} className="text-center text-white rounded bg-info">

        <h6><img src={employee.img} className="rounded-circle" style={{ "height": "40px", "width": "40px" }} alt="" /> {employee.name}  <button type="button" onClick={() => props.handleRemoveEmployee(employee)} id="btn-confirm" className="px-3 btn btn-danger btn-sm">
            <i className="fas fa-times"></i>
        </button> </h6>
    </div>)
    return (
        <div className="card">
            <h2 className="mt-2 text-center">Employee Status</h2>
            <div className="card-body">

                <div className="card-text">
                    <h6 className='p-2 text-warning'>Total Amount of Hiring Employee: ${totalSalary}</h6>
                </div>
                <h5 className="p-2 text-center text-white card-title bg-dark ">Hired Employee List</h5>
                {totalEmployees}




            </div>
        </div>
    );
};

export default Status;