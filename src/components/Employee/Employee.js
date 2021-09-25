import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
const Employee = (props) => {
    const { name, designation, img, salary, experience, Email } = props.employee;
    return (


        <MDBCol md='4' className='mb-4'>
            <MDBCard>
                <MDBCardImage
                    hover
                    overlay='white-light'
                    className='card-img-top'
                    src={img}
                    alt='man'
                    style={{ "height": "400px" }}
                />

                <MDBCardBody cascade className='text-center'>
                    <MDBCardTitle className='card-title'>
                        <strong>{name}</strong>
                    </MDBCardTitle>

                    <p className='font-weight-bold blue-text'>{designation}</p>

                    <MDBCardText>
                        Email: {Email}
                        <br />
                        Salary : ${salary}
                        <br />
                        Experience : {experience}

                    </MDBCardText>
                    <MDBCol md='12' className='d-flex justify-content-center'>
                        <a href='!#' className='px-2 fa-lg li-ic'>
                            <MDBIcon fab icon='linkedin-in'></MDBIcon>
                        </a>

                        <a href='!#' className='px-2 fa-lg tw-ic'>
                            <MDBIcon fab icon='twitter'></MDBIcon>
                        </a>

                        <a href='!#' className='px-2 fa-lg fb-ic'>
                            <MDBIcon fab icon='facebook-f'></MDBIcon>
                        </a>
                    </MDBCol>


                </MDBCardBody>
            </MDBCard>
        </MDBCol>

    )
}

export default Employee;