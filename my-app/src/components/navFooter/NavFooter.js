import React from 'react';
import './NavFooter.scss';
import { Link, Navigate } from "react-router-dom";

export const NavFooter = () => {
    return (
        <>
            <div className="nav-link-Footer">
                <ul>
                    <li><Link className="nav-link" to="/Discover"><i className="bi bi-house"></i></Link><span>Home</span></li>
                    <li><Link className="nav-link" to="/Inbox"><i className="bi bi-chat-dots"></i></Link><span>Inbox</span></li>
                    <li><Link className="nav-link" to="/Schedule"><i className="bi bi-calendar3"></i></Link><span>Schedule</span></li>
                    <li><Link className="nav-link" to="/Profile"><i className="bi bi-person"></i></Link><span>Profile</span></li>
                </ul> 
            </div>
        </>
    )
}
