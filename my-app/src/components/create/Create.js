import React from 'react';
import './Create.scss';

export const Create = () => {
    return (
        <>
            <form>
                <textarea rows="4" placeholder="I'd like some companionship for a few hours"></textarea>
                <button type="button" className="normal-submit">Submit</button>
            </form>
        </>
    )
}
