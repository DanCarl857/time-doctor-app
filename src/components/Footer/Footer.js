import React from 'react';
import FooterStyled, { FooterTextStyled, FooterSpanText } from './styles';

/* 
 * Footer component:
 * Serves as footer to the application
*/
class Footer extends React.Component {
    render() {
        return (
            <FooterStyled>
                <FooterTextStyled>
                    Worked Today: <FooterSpanText>06m</FooterSpanText>
                </FooterTextStyled>
                <FooterTextStyled>
                    Company Time: <FooterSpanText>10:24 PM GMT +08:00</FooterSpanText>
                </FooterTextStyled>
            </FooterStyled>
        )
    }
}

export default Footer;