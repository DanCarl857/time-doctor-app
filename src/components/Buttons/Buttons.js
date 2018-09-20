import React from 'react';
import Container, { Image } from './styles';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

/* 
 * Button component:
 * Displays the start or stop button depending on whether we are on a start or stop event
*/
class Buttons extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            running: this.props.running_state.running
        }
    }

    // Update state once props change
    componentWillReceiveProps(nextProps) {
        if (nextProps.running_state.running !== this.props.running_state.running) {
            this.setState({
                running: nextProps.running_state.running
            });
        }
    }

    render() {

        const btn = this.props.timingEvents.length % 2 === 0
        ? <Image src={require('../../assets/play.png')} alt="Play button"/>
        : <Image src={require('../../assets/stop.png')} alt="Pause button" />

        return (
            <div>
                <Container running={this.state.running} onClick={this.props.handleClick}>{btn}</Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        running_state: state.runningState
    }
}

export default connect(mapStateToProps, null)(Buttons);