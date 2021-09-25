import React from 'react';
import { useState, useEffect } from 'react';
import Employee from '../Employee/Employee';
import Status from '../Status/Status';
const Employees = () => {

    const [employees, selectedEmployees] = useState([]);

    useEffect(() => {
        fetch('./employees.json')
            .then(response => response.json())
            .then(data => selectedEmployees(data))
    }, []);
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            employees.map((employee) => <Employee key={employee.id} employee={employee}></Employee>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Status></Status>
                </div>
            </div>

        </div>
    );
};

export default Employees;
