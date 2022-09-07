import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Create } from "../create/Create";
import { Header } from '../header/Header'
import { NavFooter } from '../navFooter/NavFooter'
import { Wishes } from '../wishes/Wishes';

import './Profile.scss';
import { ProfileDetails } from './ProfileDetails';
import { EditProfile } from '../editProfile/EditProfile';
import { History } from '../history/History';

export const Profile = () => {
    const navigate = useNavigate();
    const [key, setKey] = useState('profile');
    return (
        <>
            <Header heading="Profile" />
            <NavFooter />
            <div className="inside-container">
                <Tabs
                    id="controlled-tab-example"
                    defaultActiveKey="profile"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="profile" title="Profile">
                        <ProfileDetails />
                    </Tab>
                    <Tab eventKey="create" title="History">
                        {/* <Create /> */}
                        <History />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}