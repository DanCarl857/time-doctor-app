import styled from 'styled-components';

const WatchStyled = styled.section`
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    margin-top: 1%;
`

const Text = styled.p`
    font-size: 65px;
    font-weight: 300;
    color: #1c1c1c;
`

export { WatchStyled as default, Container, Text }