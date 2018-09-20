import styled from 'styled-components';

const HeaderStyled = styled.header`
    background-color: ${props => props.running ? '#53BE78' : '#6B849E'}
    color: #fff;
    margin-top: 0;
    padding: 8px;
`

const HeaderTextStyled = styled.p`
    font-size: 15px;
    font-weight: 300
`

export { HeaderStyled as default, HeaderTextStyled }