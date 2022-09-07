import React from 'react';
import './EditProfile.scss';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Header } from "../header/Header";
import { NavFooter } from "../navFooter/NavFooter";

export const EditProfile = () => {
    const navigate = useNavigate();
    const navigateToUserType = () => {
        navigate('/UserType');
    };
    return (
        <>
            <Header heading="Create Profile" />
            <NavFooter />
            <main className="main-container edit-profile">
                <form action="">
                    <i className="profile-size bi bi-person-circle"></i><br />
                    <label className="align-self-center">Change photo*</label><br />
                    <textarea name="about" id="about" cols="40" rows="4"
                        placeholder="Write a little bit about you"></textarea><br />
                    <textarea name="supportTypes" id="supportTypes" cols="40" rows="8"
                        placeholder="Type the kind of people/communities you want of support and seperate it with a comma &#10;Example: &#10;lgbtq, blind, old"></textarea><br />
                    <input type="tel" value="mobile" placeholder="0000000000" /><br />
                    <input type="email" value="email" placeholder="Email Address" /><br />
                    <legend>Date of birth*</legend>
                    <input type="date" placeholder="mm/dd/yyyy" /><br />
                    <select name="gender" id="genderSelect">
                        <option value="">Gender* (We do not discriminate)</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select><br />
                    <select name="maritalStatus" id="maritalStatus">
                        <option value="">Marital status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                    </select><br />
                    <input type="text" placeholder="Pincode*" /><br />
                    <input type="text" placeholder="City" /><br />
                    <input type="text" placeholder="State" /><br />
                    <input type="text" placeholder="Address" /><br />
                    <input type="text" placeholder="Covid vaccine*" /><br />
                    <strong>Verification</strong><br />
                    <label>Aadhar/Ration/PAN/Driving License/Voters*</label><br />
                    <div className="upload-options">
                        <button>
                        <i className="profile-size bi bi-upload"></i><br />
                            Front
                        </button>
                        <button>
                        <i className="profile-size bi bi-upload"></i><br />
                            Back
                        </button>
                    </div><br />
                    <div>
                        <label htmlFor="loremCheckbox"  className="discl"><input type="checkbox" name="" id="loremCheckbox" /> Lorem ipsum dolor sit amet</label>
                        <button type="button" onClick={navigateToUserType} className="normal-submit">Submit</button>
                    </div>
                </form>
            </main>   
        </>
    )
}
