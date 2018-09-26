import React from 'react';
import FooterStyled, { FooterTextStyled, FooterSpanText } from './styles';
import { connect } from 'react-redux';

/* 
 * Footer component:
 * Serves as footer to the application
*/
class Footer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toUTCString(),
            minutes: this.props.worked_time.minutes
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.tickID = setInterval(this.tick, 1000);
        const workTime = localStorage.getItem('time_worked');
        this.setState({
            minutes: parseInt(workTime)
        });
    }

    componentWillUnmount() {
        clearInterval(this.tickID);
    }

    // Update state once props change
    componentWillReceiveProps(nextProps) {
        if (nextProps.worked_time.minutes !== this.props.worked_time.minutes) {
            this.setState({
                minutes: nextProps.worked_time.minutes
            });
        }
    }

    tick() {
        this.setState({ 
            time: new Date().toUTCString()
        })
    }

    renderWorkedTime = () => {
        return (
            <FooterTextStyled>
                Worked Today: <FooterSpanText>{this.state.minutes}m</FooterSpanText>
            </FooterTextStyled>
        )
    }

    render() {
        return (
            <FooterStyled>
                {this.renderWorkedTime()}
                <FooterTextStyled>
                    Company Time: <FooterSpanText>{this.state.time}</FooterSpanText>
                </FooterTextStyled>
            </FooterStyled>
        )
    }
}

function mapStateToProps(state) {
    return {
        worked_time: state.workedTime
    }
}

export default connect(mapStateToProps, null)(Footer);