import React, { useState } from 'react';
import { Header } from '../header/Header'
import { NavFooter } from '../navFooter/NavFooter'
import { Wishes } from '../wishes/Wishes';

export const Notification = () => {
    return (
        <>
            <Header heading="Notification"  hide="notification" />
            <NavFooter />
            <div className="inside-container">
                <Wishes />
            </div>
        </>
    )
}