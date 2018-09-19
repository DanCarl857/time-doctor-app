import React from 'react';
import HeaderStyled, { HeaderTextStyled } from './styles';

// Import logo
// import logo from './../../assets/int_td.png';

/* 
 * Header component:
 * Serves as header to the application
*/
class Header extends React.Component {
    render() {
        return (
            <HeaderStyled>
                <HeaderTextStyled>Time Doctor</HeaderTextStyled>
            </HeaderStyled>
        )
    }
}

export default Header;