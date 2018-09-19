import styled from 'styled-components';

const FooterStyled = styled.footer`
    background-color: #EDF0F7;
    color: #6B849E;

    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
`

const FooterTextStyled = styled.p`
    font-size: 15px;
    font-weight: 300;
    margin-left: 10px;
    font-weight: bolder
`

const FooterSpanText = styled.span`
    font-size: 13px;
`

export { FooterStyled as default, FooterTextStyled, FooterSpanText }