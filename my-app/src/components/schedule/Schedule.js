import React from 'react';
import './Schedule.scss';
import { Header } from '../header/Header'
import { NavFooter } from '../navFooter/NavFooter'

export const Schedule = () => {
    return (
        <>
            <Header heading="Schedule" />
            <NavFooter />
            <div className="schedule">
                <form>
                    <div className="schedule-inline"><h3>Schedule a meet</h3> <i className="close-cta bi bi-x-lg"></i></div>
                    <div className="schedule-inline"><i className="bi bi-calendar3"></i> <span> <input type="date" placeholder="mm/dd/yyyy" /></span></div>
                    <div className="schedule-inline"><i className="bi bi-clock"></i> <span> <input type="time" placeholder="mm/dd/yyyy" /></span></div>
                    <div className="schedule-inline"><i className="bi bi-list-nested"></i> <span><input type="text" placeholder="Add Description" /></span></div>
                    <button type="button" className="normal-submit">Submit</button>
                </form>
            </div>
        </>
    )
}
