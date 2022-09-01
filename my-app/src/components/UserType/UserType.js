import React from 'react';
import './UserType.scss';

export const UserType = () => {
    return (
        <>
            <div className="app-container-g">
                <h2>To get going, pick a mode.</h2>
                <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed diam</p>
                <div className="radio-container">
                    <div className="radio-entity">
                        <i className="profile-icon bi bi-x-circle-fill"></i>
                        <label className="radio-label"><span className="radio-title">Beneficiary</span> 
                            <p>lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit,</p>
                        </label>
                        <input type="radio" id="beneficiary" name="radio-default"/>
                    </div>

                    <div className="radio-entity">
                        <i className="profile-icon bi bi-x-circle-fill"></i>
                        <label className="radio-label"><span className="radio-title">Supporter</span> 
                            <p>lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit,</p>
                        </label>
                        <input type="radio" id="beneficiary" name="radio-default"/>
                    </div>
                </div>
                <div className="footer-g">
                    <i className="bi bi-lock-fill"></i>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</p>
                    <button type="submit" className="phone-submit"><i className="bi bi-chevron-left"></i></button>
                </div>
            </div>
        </>
    )
}
