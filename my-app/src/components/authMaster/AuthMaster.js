import React from 'react';
import './AuthMaster.scss';
import { Link } from "react-router-dom";

const authMaster = () => {
    return (
        <>
         <div className="auth-header">
                <h2>Let’s sign <br />you up</h2>
                <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed diam</p>
                <div className="auth-section">
                    <Link className="auth-link nav-link" to="/newcourse">Using Email</Link>
                    <Link className="auth-link nav-link" to="/PhoneAuth">User Phone Number</Link>
                </div>
                <div className="auth-footer">
                    <i className="bi bi-lock-fill"></i>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</p>
                </div>
            </div>   
        </>
    )
}

export default authMaster
