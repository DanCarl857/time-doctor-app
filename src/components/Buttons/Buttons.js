import React from 'react';

/* 
 * Button component:
 * Displays the start or stop button depending on whether we are on a start or stop event
*/
const Buttons = (props) => {
    const label = props.timingEvents.length % 2 === 0
        ? 'Start'
        : 'Stop'

    return (
        <div>
            <button onClick={props.handleClick}>{label}</button>
        </div>
    )
}

export default Buttons;