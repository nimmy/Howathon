import React from 'react';
import './Header.scss';
import { Link, Navigate } from "react-router-dom";

export const Header = (props) => {
    return (
        <>
            <div className="header-section">
                <div className="header-back"><Link className="nav-link" to="/Discover"><i className="bi bi-chevron-left"></i></Link></div>
                <h2 className="header-heading">{props.heading}</h2>
                <div className="header-notification" style={{display: props.hide !== '' ? 'hide': 'block'}}><Link className="nav-link" to="/Notification"><i className="bi bi-bell"></i></Link></div>
            </div>
        </>
    )
}
