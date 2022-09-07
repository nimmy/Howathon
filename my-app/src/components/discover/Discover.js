import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Create } from "../create/Create";
import { Header } from '../header/Header'
import { NavFooter } from '../navFooter/NavFooter'
import { Wishes } from '../wishes/Wishes';

export const Discover = () => {
    const navigate = useNavigate();
    const [key, setKey] = useState('wishes');
    return (
        <>
            <Header heading="Discover" hide="back" />
            <NavFooter />
            <div className="inside-container">
                <Tabs
                    id="controlled-tab-example"
                    defaultActiveKey="wishes"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="wishes" title="Wishes">
                        <Wishes />
                    </Tab>
                    <Tab eventKey="create" title="Create A Wish">
                        <Create />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
