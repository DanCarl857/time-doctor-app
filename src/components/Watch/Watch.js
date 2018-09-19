import React from 'react';
import WatchStyled, { Container, Text } from './styles';
import moment from 'moment';

/* 
 * Watch component:
 * Main clock display of application
 * Also contains basic timer logic
*/
class Watch extends React.Component {

    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            toggle: false
        }; 

        // this holds the actual time
        this.time = null;

        // Used to clear the interval
        this.intervalId = null;

        // holds the formatted current time in HH:mm:ss
        this.state.currentTime = "00:00:00";
    } 

    componentDidMount() {
        this.initializeTime();
        this.createInterval();
    }

    initializeTime = () => {
        this.time = 0;
        this.setState({
            currentTime: this.formatTime(this.getTime())
        });
    }

    createInterval() {
        this.intervalId = setInterval(this.updateTime, 100);
    }

    clearInterval() {
        clearInterval(this.intervalId);
    }

    updateTime = () => {
        this.time += 100;
        const newTime = this.getTime();
        const formattedTime = this.formatTime(newTime);

        this.setState({ currentTime: formattedTime });
    }

    formatTime = (obj) => {
        return obj.format("HH:mm:ss");
    }

    getTime = () => {
        return moment.utc(this.time);
    }

    playTime = () => {
        console.log('play');
        if (!this.state.toggle) {
            this.startTime();
        } else {
            this.pauseTime();
        }
    }

    startTime = () => {
        this.createInterval();
        this.toggle();
    }

    pauseTime = () => {
        this.clearInterval();
        this.toggle();
    }

    resetTime = () => {
        this.initializeTime();
        this.clearInterval();
        this.setState({ toggle: false });
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render() {

        var toggleText = !this.state.toggle ? "Play" : "Stop";

        return (
            <div>
                <WatchStyled>
                    <Container>
                        <Text>{this.state.currentTime}</Text>
                    </Container>
                    <p>
                        <button onClick={this.playTime}>{toggleText}</button>
                    </p>
                    <p>
                        <button onClick={this.resetTime}>Reset</button>
                    </p>
                </WatchStyled>
            </div>
        )
    }
}

export default Watch;