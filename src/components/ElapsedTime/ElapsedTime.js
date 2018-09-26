import React from 'react';
import Container, { Text } from './styles';
import { updateWorkedTime } from './../../actions/running.action';
import { connect } from 'react-redux';

// utility variables
let old_mins = 0;

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
function formatElapsedTime(time, running_state, props) {

    // Converts time to exact seconds
    time = Math.floor(time/1000).toFixed(0);

    // Get hours, then minutes, then seconds
    var hours = Math.floor(time / 3600);
    time -= hours * 3600;

    var minutes = Math.floor(time / 60);
    time -= minutes * 60;

    var seconds = parseInt(time % 60, 10);

    // Try to save only if minutes have changed
    if(minutes !== old_mins) {
        if (localStorage.getItem('time_worked')) {
            const work_time = localStorage.getItem('time_worked');

            // We could only update when the time has changed but for some reason
            // that causes an issue after the 3rd minute
            localStorage.setItem('time_worked', parseInt(work_time, 10)+minutes);
            // props.updateWorkedTime(parseInt(work_time, 10)+minutes);
            old_mins = minutes;
        } else {
            localStorage.setItem('time_worked', minutes);
            // props.updateWorkedTime(minutes);
            old_mins = minutes;
        }
    }

    return (
        <Container running={running_state}>
            <Text running={running_state}>
                {hours < 10 ? `0` + hours: hours}
            </Text>:
            <Text running={running_state}>
                {minutes < 10 ? '0' + minutes : minutes}
            </Text>:
            <Text running={running_state}>
                {seconds < 10 ? '0' + seconds : seconds}
            </Text>
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
            { formatElapsedTime(elapsedTime(props.timingEvents, props.computeElapsedTime), props.running, props)}
        </div>
    )
} 

// export default connect(null, { updateWorkedTime })(ElapsedTime);
export default ElapsedTime;