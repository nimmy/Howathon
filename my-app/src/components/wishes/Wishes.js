import React from 'react';
import './Wishes.scss';
import profileImage from './tamanna.jpg';
import Badge from 'react-bootstrap/Badge';
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Wishes = () => {
    const navigate = useNavigate();
    const naviageToProfile = () => {
        navigate('/Profile');
    };
    return (
        <>
            <section className="notifications-container">
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                        <p className="notification-header">Tamanna</p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                        <p className="notification-header">Tamanna</p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                        <p className="notification-header">Tamanna <Badge bg="primary">5</Badge></p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                        <p className="notification-header">Tamanna</p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                    <p className="notification-header">Tamanna <Badge bg="primary">2</Badge></p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                        <p className="notification-header">Tamanna</p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                        <p className="notification-header">Tamanna</p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                    <p className="notification-header">Tamanna <Badge bg="primary">3</Badge></p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                        <p className="notification-header">Tamanna</p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                        <p className="notification-header">Tamanna</p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                        <p className="notification-header">Tamanna</p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
                <div className="notification">
                    <img  src={profileImage} alt="profilePicture"></img>
                    <div className="notification-text" onClick={naviageToProfile}>
                        <p className="notification-header">Tamanna</p>
                        <p className="notication-content">lorem ipsum dolor sit amet,<br /> consecteter adipoiscing elit, sed</p>
                    </div>
                </div>
            </section>
        </>
    )
}
