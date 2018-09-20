import React from 'react';
import Container, { Image } from './styles';
// import PropTypes from 'prop-types';

/* 
 * Button component:
 * Displays the start or stop button depending on whether we are on a start or stop event
*/
const Buttons = (props) => {
    const btn = props.timingEvents.length % 2 === 0
        ? <Image src={require('../../assets/play.png')} alt="Play button"/>
        : <Image src={require('../../assets/stop.png')} alt="Pause button" />

    return (
        <div>
            <Container running={props.running} onClick={props.handleClick}>{btn}</Container>
        </div>
    )
}

export default Buttons;