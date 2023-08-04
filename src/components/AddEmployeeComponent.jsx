import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, emailId };

        EmployeeService.createEmployee(employee)
            .then((response) => {
                console.log(response.data);

                navigate('/employees');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <br /> <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Add Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <div className="form-label">First Name:</div>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <div className="form-label">Last Name:</div>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <div className="form-label">Email Id:</div>
                                    <input
                                        type="text"
                                        placeholder="Enter Email Id"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    ></input>
                                </div>

                                <button className="btn btn-success" onClick={(e) => saveEmployee(e)}>
                                    Submit
                                </button>
                                <Link to="/employees" className="btn btn-danger">
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeComponent;
