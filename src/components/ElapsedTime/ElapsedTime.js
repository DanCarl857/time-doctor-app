import React from 'react';
import Container, { Text } from './styles';

// Function to get the elapsed time in milliseconds
function elapsedTime(events, elapsedTime){
    let elapsed = 0;

    for (let i = 0; i < events.length; i+= 2) {
        const start = events[i];

        // Use current date if stop event doesn't exist yet
        const stop = events[i+1] || new Date();
        // Calculate elapsed time
        elapsed += stop - start;
    }

    // Pass elapsed time back to parent
    elapsedTime(elapsed);

    return elapsed;
}

// Function to get elapsed time in terms of hours, minutes and seconds
function formatElapsedTime(time, running_state) {
    // Converts time to exact seconds
    time = Math.floor(time/1000).toFixed(0);

    // Get hours, then minutes, then seconds
    var hours = Math.floor(time / 3600);
    time -= hours * 3600;

    var minutes = Math.floor(time / 60);
    time -= minutes * 60;

    var seconds = parseInt(time % 60, 10);

    return (
        <Container running={running_state}>
            <Text running={running_state}>{hours < 10 ? '0' + hours: hours}</Text>:<Text running={running_state}>{minutes < 10 ? '0' + minutes : minutes}</Text>:<Text running={running_state}>{seconds < 10 ? '0' + seconds : seconds}</Text>
        </Container>
    )
}

/* 
 * ElapsedTime component:
 * Displays the elapsed time
*/
const ElapsedTime = (props) => {
    return (
        <div>
            { formatElapsedTime(elapsedTime(props.timingEvents, props.computeElapsedTime), props.running)}
        </div>
    )
} 

export default ElapsedTime;