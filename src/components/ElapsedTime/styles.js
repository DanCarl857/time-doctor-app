import styled from 'styled-components';

const Text = styled.span`
    background-color: ${props => props.running ? '#53BE78' : '#6B849E'};
    padding: 8px;
    border-radius: 8px;
    color: #fff;
    margin-left: 2px;
    font-family: 'Roboto Mono', monospaced, sans-serif;
`

const Container = styled.div`
    font-size: 45px;
    font-weight: 300;
    color: ${props => props.running ? '#53BE78' : '#6B849E'};
    float: right
`

export { Container as default, Text };