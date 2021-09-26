import React from 'react';
import { useState, useEffect } from 'react';
import Employee from '../Employee/Employee';
import Status from '../Status/Status';
const Employees = () => {

    const [employees, setEmployees] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);

    useEffect(() => {
        fetch('./employees.json')
            .then(response => response.json())
            .then(data => setEmployees(data))
    }, []);

    const handleEmployees = (employee) => {

        let newEmployee = [...selectedEmployees, employee];
        setSelectedEmployees(newEmployee);

    }
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            employees.map((employee) => <Employee handleEmployees={handleEmployees} key={employee.id} employee={employee}></Employee>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Status selectedEmployees={selectedEmployees} ></Status>
                </div>
            </div>

        </div>
    );
};

export default Employees;
