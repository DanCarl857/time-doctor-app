import styled from 'styled-components';

const HeaderStyled = styled.header`
    background-color: ${props => props.running ? '#53BE78' : '#6B849E'}
    color: #fff;
    margin-top: 0;
    padding-top: 8px;
    padding-bottom: 8px;
`

const HeaderTextStyled = styled.p`
    font-size: 15px;
    font-weight: 300
`

const HeaderLogo = styled.img`
    color: #fff;
    float: left;
    margin-top: 15px;
    margin-left: 8px;
    margin-right: 5px;
`

export { HeaderStyled as default, HeaderTextStyled, HeaderLogo }