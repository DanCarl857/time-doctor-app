import React from 'react';
import WatchStyled, { Container, Column } from './styles';

// React redux configs
import { connect } from 'react-redux';

// Custom components
import Buttons from './../Buttons/Buttons';
import ElapsedTime from './../ElapsedTime/ElapsedTime';

// Action Creators
import { updateRunningState } from './../../actions/running.action';

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
            nonce: 0,
            running: false
        }

        this.addTimerEvent = this.addTimerEvent.bind(this);
        this.tick = this.tick.bind(this);
        this.poll = setInterval(this.tick, 1000);
    } 

    tick() {
        this.setState((prevState) => ({ nonce: prevState.nonce + 1 }));
    }

    addTimerEvent() {
        const { timingEvents } = this.state;

        this.setState({
            timingEvents: [
                ...timingEvents,
                new Date()
            ]
        });

    
        if (timingEvents.length % 2 === 0) {
            // Update whole app with running state using action creator
            this.props.updateRunningState(timingEvents.length % 2);
            this.setState({ running: true });
        } else {
            // When timer stops we still have to update the running state
            this.props.updateRunningState(1);
            this.setState({ running: false });
        }
    }

    render() {
        return (
            <div>
                <WatchStyled>
                    <Container>
                        <Column>
                            <ElapsedTime timingEvents={this.state.timingEvents} running={this.state.running} />
                        </Column>
                        <Column>
                            <Buttons handleClick={this.addTimerEvent} timingEvents={this.state.timingEvents} running={this.state.running} />
                        </Column>
                    </Container>
                </WatchStyled>
            </div>
        )
    }
}

export default connect(null, { updateRunningState })(Watch);