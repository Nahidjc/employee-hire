import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';;
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
        let exitsEmployee = selectedEmployees.find(o => o.id === employee.id);
        if (!exitsEmployee) {
            let newEmployee = [...selectedEmployees, employee];
            setSelectedEmployees(newEmployee);
        } else {
            handleClick();
        }



    }
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    const handleRemoveEmployee = (employee) => {
        // array.splice(index, 1);

        let newEmployee = selectedEmployees.filter(e => e.id !== employee.id);
        console.log(newEmployee);
        setSelectedEmployees(newEmployee)
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
                    <Status handleRemoveEmployee={handleRemoveEmployee} selectedEmployees={selectedEmployees} key={selectedEmployees.id} ></Status>
                </div>

                <Stack spacing={2} sx={{ width: '100%' }}>

                    <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                        <Alert severity="warning">The Employee Already Added!</Alert>
                    </Snackbar>

                </Stack>
            </div>

        </div>
    );
};

export default Employees;
