import styled from 'styled-components';

const Container = styled.button`
    background-color: #6B849E;
    font-size: 50px;
    border-color: #6B849E;
    height: 70px;
    width: 70px;
    border-radius: 35px;
    margin-left: 45px;
    text-align: center;
    position: relative;
    top: -7px;
`

const Image = styled.img`
    height: 35px;
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export { Container as default, Image };