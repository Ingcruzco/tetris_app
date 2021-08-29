import styled from "styled-components";

export const StyledLogin=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Lato', Calibri, Arial, sans-serif;
    background-color:#F2F3F4;
    width:100vw;
    height:100vh;
    overflow:hidden;
    

`;
export const StyledCredentials=styled.div`
    
    width:70%;
    margin-bottom:10%;
`;

export const StyledInput=styled.input`
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    margin-bottom:20%;
    &:focus{
        outline:none;
    }
`;

export const StyledH3=styled.h3`
    color:#CACFD2;
`;

export const ButtonLogin=styled.button`
    
   background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%);
   mmargin: 10px;
   padding: 15px 45px;
   text-align: center;
   text-transform: uppercase;
   transition: 0.5s;
   background-size: 200% auto;
   color: white;            
   box-shadow: 0 0 20px #eee;
   border-radius: 10px;
   display: block;


   &:hover {
   background-position: right center; /* change the direction of the change here */
   color: #fff;
   text-decoration: none;
 }

`;



