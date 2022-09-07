import { Link, Navigate, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Header } from "../header/Header";
import { History } from "../history/History";
import { Create } from "../create/Create";
import { NavFooter } from "../navFooter/NavFooter";

export const WishCreate = () => {
    const navigate = useNavigate();
    const [key, setKey] = useState('create');
    return (
        <>
            <Header heading="How do you want to  help!" />
            <NavFooter />
            <div className="inside-container">
                <Tabs
                    id="controlled-tab-example"
                    defaultActiveKey="create"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="create" title="Create">
                        <Create />
                    </Tab>
                    <Tab eventKey="history" title="History">
                        <History />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
