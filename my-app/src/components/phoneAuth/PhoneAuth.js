import React, { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    confirmPasswordReset,
  } from 'firebase/auth';
  import { auth } from  '../../firebase';
  import './PhoneAuth.scss';
  import { Link, Navigate, useNavigate } from "react-router-dom";



const PhoneAuth = ()  => {
    const [number, setNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState("");
    const [flag, setFlag] = useState(false);
    const [confirmObj, setConfirmObj] = useState('');
    const navigate = useNavigate();
    const navigateToWishCreate = () => {
        navigate('/UserType');
    };
    
const getOtp = async (e) =>  {
    e.preventDefault();
    try {
        const response =  await setUpRecaptha(number); 
        setConfirmObj(response);
        console.log(response);
        setFlag(true);
    }
    catch (err) {
        console.log(err.message);
    }
    console.log(number);
}

const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    setError('');
    if (otp === ' ' || otp  ===null) return;
        await confirmObj.confirm(otp);
        navigateToWishCreate();
    try {

    }
    catch (err) {
        console.log(err.message);
        setError(err.message);
    }
}


const setUpRecaptha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
}

    return (
        <>
            <div className="auth-header" style={{display: !flag  ? 'block' :  'none'}}>
                <div className="page-back"><Link className="nav-link" to="/"><i className="bi bi-chevron-left"></i></Link></div>
                <h2>What’s your <br />number ?</h2>
                <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed diam</p>
                <form onSubmit={getOtp}>
                    <div>
                        <label htmlFor="phoneNumber" className="form-label">Email address</label>
                        <input type="text" value={''} 
                        onChange={(e) => {
                                if (e.target.value === ' ' || e.target.value ===  undefined)  {
                                    setError('Please add  the number');
                                } else {
                                    setError('');
                                }
                                setNumber(e.target.value);
                            }
                        } 
                        className="form-control" 
                        value={number}
                        id="phoneNumber" 
                        placeholder="Phone Number" />
                        <span className="disc-font"> Please use your country name before phone number including + sign</span>
                    </div>
                    <div id="recaptcha-container"></div>
                    <div className="auth-footer">
                        <i className="bi bi-lock-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</p>
                        <button type="submit" className="phone-submit"><i className="bi bi-chevron-left"></i></button>
                    </div>
                </form>
            </div>
            <div className="auth-header" style={{display: flag  ? 'block' :  'none'}}>
                <div className="page-back"><i className="bi bi-chevron-left"></i></div>
                <h2>Verify your <br />number ?</h2>
                <p>Enter the OTP we’ve sent by SMS to you phone number. <button className="change-link">Change Number</button></p>
                <form onSubmit={verifyOtp}> 
                    <div>
                        <input type="text" value={''} 
                        onChange={(e) => {
                                if (e.target.value === ' ' || e.target.value ===  undefined)  {
                                    setError('Please add  the number');
                                } else {
                                    setError('');
                                }
                                setOtp(e.target.value);
                            }
                        } 
                        className="form-control" 
                        value={otp}
                        id="getOtp" 
                        placeholder="Enter OTP" />
                    </div>

                    <div className="auth-footer">
                        <i className="bi bi-lock-fill"></i>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</p>
                        <button type="submit" className="phone-submit"><i className="bi bi-chevron-left"></i></button>
                    </div>
                </form>
            </div>
        </>
    )
}


export default PhoneAuth;

