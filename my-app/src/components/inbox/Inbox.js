import React from 'react';
import inbox from './inbox.jpg';
import './Inbox.scss'
;import { Header } from '../header/Header'
import { NavFooter } from '../navFooter/NavFooter'

export const Inbox = () => {
    return (
        <div className="inbox">
            <Header heading="Inbox" />
            <NavFooter />
            <img src={inbox} />
        </div>
    )
}
