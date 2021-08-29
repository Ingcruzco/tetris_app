import styled  from "styled-components";
import fontFamily from '../../font/Pixel-LCD-7.woff';
export const StyledButton=styled.button`
    background-color:white; /* Green */
    border: none;
    color: black;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    outline: none;
    cursor: pointer;
    border-radius:30px;
    font-family:Pixel, Arial, Helvetica, sans-serif;
    &:hover{
        background-color: #555555;
        color: white;
    } 
`;