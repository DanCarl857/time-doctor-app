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
            minutes: 0
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.tickID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.tickID);
    }

    tick() {
        this.setState({ 
            time: new Date().toUTCString()
        })
    }

    render() {
        return (
            <FooterStyled>
                <FooterTextStyled>
                    Worked Today: <FooterSpanText>{this.state.minutes}m</FooterSpanText>
                </FooterTextStyled>
                <FooterTextStyled>
                    Company Time: <FooterSpanText>{this.state.time}</FooterSpanText>
                </FooterTextStyled>
            </FooterStyled>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         elapsed_time: state.elapsedTime
//     }
// }

export default connect(null, null)(Footer);