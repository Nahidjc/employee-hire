import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
const Status = (props) => {

    const employees = props.selectedEmployees;
    console.log(employees);
    let totalSalary = 0;
    let totalEmployees = [];
    for (const employee of employees) {
        totalSalary += employee.salary;


    }

    totalEmployees = employees.map(employee => <div key={employee.id} className="text-center text-white rounded bg-info">

        <h6>{employee.name}  <button type="button" id="btn-confirm" className="px-3 btn btn-danger btn-sm">
            <i className="fas fa-times"></i>
        </button> </h6>
    </div>)
    return (
        <div className="card">
            <h2 className="mt-2 text-center">Employee Status</h2>
            <div className="card-body">

                <div className="card-text">
                    <h6>Total Amount of Hiring Employee: ${totalSalary}</h6>
                </div>
                <h5 className="p-2 text-center text-white card-title bg-dark ">Hired Employee List</h5>
                {totalEmployees}




            </div>
        </div>
    );
};

export default Status;