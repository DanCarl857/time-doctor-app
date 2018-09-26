import React from 'react';
import HeaderStyled, { HeaderTextStyled, HeaderLogo } from './styles';
import { connect } from 'react-redux';

// Import logo
import logo from './../../assets/logo.png';

/* 
 * Header component:
 * Serves as header to the application
*/
class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            running: this.props.running_state.running
        }

        this.renderCorrectHeading = this.renderCorrectHeading.bind(this);
    }

    // Update state once props change
    componentWillReceiveProps(nextProps) {
        if (nextProps.running_state.running !== this.props.running_state.running) {
            this.setState({
                running: nextProps.running_state.running
            });
        }
    }

    renderCorrectHeading() {
        return (
            <div>
                <HeaderStyled running={this.state.running}>
                    <HeaderLogo src={logo} alt="Time Doctor logo" className="App-logo" />
                    <HeaderTextStyled>Time Doctor</HeaderTextStyled>
                </HeaderStyled>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderCorrectHeading()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        running_state: state.runningState
    }
}

export default connect(mapStateToProps, null)(Header);