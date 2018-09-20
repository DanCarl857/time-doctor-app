import React from 'react';
import WatchStyled, { Container, Text } from './styles';
// import moment from 'moment';

import Buttons from './../Buttons/Buttons';
import ElapsedTime from './../ElapsedTime/ElapsedTime';

/* 
 * Watch component:
 * Main clock display of application
 * Also contains basic timer logic
*/
class Watch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timingEvents: [],
            nonce: 0
        }

        this.addTimerEvent = this.addTimerEvent.bind(this);
        this.tick = this.tick.bind(this);
        this.poll = setInterval(this.tick, 1000);
    } 

    tick() {
        this.setState((prevState) => ({ nonce: prevState.nonce + 1 }));
    }

    addTimerEvent() {
        this.setState({
            timingEvents: [
                ...this.state.timingEvents,
                new Date()
            ]
        });
    }

    render() {
        return (
            <div>
                <WatchStyled>
                    {/* <Container>
                        <Text>{this.state.currentTime}</Text>
                    </Container> */}
                    <Container>
                        <ElapsedTime timingEvents={this.state.timingEvents} />
                        <Buttons handleClick={this.addTimerEvent} timingEvents={this.state.timingEvents} />
                    </Container>
                    
                </WatchStyled>
            </div>
        )
    }
}

export default Watch;