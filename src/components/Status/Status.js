import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
const Status = () => {
    return (
        <div class="card">
            <h2 className="mt-2 text-center">Employee Status</h2>
            <div class="card-body">

                <p class="card-text">
                    <h6>Total Amount of Hiring Employee: 500000</h6>
                </p>
                <h5 class="card-title text-center bg-dark p-2 text-white ">Hired Employee List</h5>

                <div className="text-center text-white rounded bg-info">


                    <h6>Nahid Hasan  <button type="button" id="btn-confirm" className="px-3 btn btn-danger btn-sm">
                        <i class="fas fa-times"></i>
                    </button> </h6>
                </div>


            </div>
        </div>
    );
};

export default Status;