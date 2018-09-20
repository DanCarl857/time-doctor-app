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
    margin-top: 9%;

`

const Column = styled.div`
    float: left;
`

export { WatchStyled as default, Container, Column }