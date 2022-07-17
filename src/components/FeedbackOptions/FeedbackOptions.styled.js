import styled from 'styled-components';

export const Button = styled.button`
    margin: 10px;
    background: rgb(226, 226, 226);
    border: none;
    border-radius: 3px;
    transition-property: box-shadow;
    width: 80px;
    height: 30px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover {
    color: #fff;
    background-color: #188ce8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

`;