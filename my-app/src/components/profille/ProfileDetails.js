import React from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import './Profile.scss';
import refresh  from './refresh.png';
import flower from './flower.png';
import location from './location.png';
import umbrella from './umbrella.png';
import verify from './verify.png';
import talking from './talking.png';
import oldMan from './old-man.jpg';
import gardening from './gardening.png';
import sudoku from './sudoku.png';
import meditation from './meditation.png';






export const ProfileDetails = () => {
    const navigate = useNavigate();
    const navigateToInbox = () => {
        navigate('/Inbox');
    };
    return (
        <>
            <div className="banner-container">
                <img src={oldMan} alt="Elder-man"/>
                <div className="banner-details">
                    <p className="br-1">Ramesh, 65 <span><img src={verify} alt="verification"/></span></p>
                    <p className="br-2"><span><img src={umbrella} alt="verification"/></span>shantineer old age home</p>
                    <p className="br-3"><span><img src={location} alt="verification"/></span>9 miles away</p>
                </div>
            </div>
            <div className="feature-wrapper">
                <div className="feature-container">
                    <div className="fr-1">
                    <p className="fr-title">Wish
                    </p>
                    <img className="basic-logo" src={flower} alt="flower-icon"/>
                    </div>
                    <div className="fr-2">
                        <p>To be able to go pandal hopping <br/> this durga puja</p>
                    </div>
            </div>
            <div className="feature-container">
                    <div className="fr-1">
                        <p className="fr-title">Event Schedule</p>
                        <img className="basic-logo" src={flower} alt="flower-icon"/>
                    </div>
                    <div className="fr-2">
                        <div className="event-row-1">
                            <p className="events"><span><img src={talking} alt="verification"/></span>Talking</p>
                            <p className="events"><span><img src={gardening} alt="verification"/></span>Gardening</p>
                        </div>
                        <div className="event-row-2">
                            <p className="events"><span><img src={sudoku} alt="verification"/></span>Sudoku</p>
                            <p className="events"><span><img src={meditation} alt="verification"/></span>Meditation</p>
                        </div>
                    </div>
                </div>
                <div className="feature-container">
                    <div className="fr-1">
                        <p className="fr-title">Dream</p>
                        <img className="basic-logo" src={flower} alt="flower-icon"/>
                    </div>
                    <div className="fr-2">
                        <p>lorem ipsum dolor sit amet,
                            consecteter adipoiscing elit, sed diam nonummy nibh eusmod tincidunt ut laoreet dolore
                        </p>
                    </div>
                </div>
                <div className="feature-container">
                    <div className="fr-1">
                        <p className="fr-title">Life Story</p>
                        <img className="basic-logo" src={flower} alt="flower-icon"/>
                    </div>
                    <div className="fr-2">
                        <p>lorem ipsum dolor sit amet,
                            consecteter adipoiscing elit, sed diam
                        </p>
                        <p className="fr-sm-txt">
                            make conversation to read the entire life story.
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="refresh-logo">
                <img src={refresh} alt="refresh-logo" onClick={navigateToInbox}></img>
            </div>
        </>
    )
}
