import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import './Employee.css'
const Employee = (props) => {
    const { name, designation, img, salary, experience, Email } = props.employee;
    return (


        <MDBCol md='4' sm='6' xs='8' className='mb-4'>
            <MDBCard>
                <MDBCardImage
                    hover
                    overlay='white-light'
                    className='pt-2 rounded-circle card-img-top'
                    src={img}
                    alt='man'
                    style={{ "height": "200px", "width": "200px", 'margin': 'auto' }}
                />

                <MDBCardBody cascade className='text-center'>
                    <MDBCardTitle className='card-title'>
                        <strong>{name}</strong>
                    </MDBCardTitle>

                    <p className='font-weight-bold blue-text'>{designation}</p>

                    <MDBCardText>
                        Email: {Email}
                        <br />
                        Expected Salary : ${salary}
                        <br />
                        Experience : {experience}

                    </MDBCardText>
                    <button onClick={() => { props.handleEmployees(props.employee) }} className='mb-3 btn btn-sm btn-info'>Hire Employee</button>
                    <br />

                    <MDBCol md='12' className='d-flex justify-content-center'>
                        <a className="text-white btn btn-sm" role="button" style={{ "backgroundColor": " #3b5998" }} href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                        <a className="text-white btn btn-sm" style={{ "backgroundColor": "#55acee" }} href="#!" role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        <a className="text-white btn btn-sm" style={{ "backgroundColor": "#0082ca" }} href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>
                    </MDBCol>


                </MDBCardBody>
            </MDBCard>
        </MDBCol>

    )
}

export default Employee;