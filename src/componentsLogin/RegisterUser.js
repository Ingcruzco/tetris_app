import React from 'react';
import { useForm } from '../hooks/useForm';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';


const Container=styled.div`
    position: absolute;
    margin-left:40%;
    margin-top:200px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Card=styled.div`
    width:20vw;
    height:50vh;
    background:#CAD1D2 ;
    font-family: Arial, Helvetica, sans-serif;
    padding:0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
`;
const Button=styled.button`
    box-shadow:inset 0px 1px 0px 0px #fff6af;
    background:linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
    background-color:#ffec64;
    border-radius:6px;
    border:1px solid #ffaa22;
    display:inline-block;
    cursor:pointer;
    color:#333333;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #ffee66;
    &:hover{
        background:linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
	    background-color:#ffab23;
    }
    &:active{
        position:relative;
	    top:1px;     
    }

`;

const RegisterUser = props => {
    const history=useHistory();
    const [formValues,handlInputChange]=useForm();
    const handleClick=async ()=>{
        try{
            const response=await axios({
                method:'POST',
                url:'http://localhost:8080/api/usuarios/register',
                data:{
                    email:formValues.email,
                    name:formValues.firstName,
                    lastName:formValues.lastName,
                    password:formValues.password,
                    active:true,
                    role:"user_role"
                },
                headers:{ 'content-type': 'application/json' },
            });

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: response.data.msg,
                showConfirmButton: false,
                timer: 1500
              });

              history.push("/api/usuarios/login");
              
        }catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Bad Request',
                text: err.response.data.msg,
              })
        }
    }


    return (

        <Container>
            <GlobalStyle color="#2980b9"/>
            <Card>

                <h1>User Registration</h1>
                <input 
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handlInputChange}
                    placeholder="First Name"
                /><br/>
                <input 
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handlInputChange}
                    placeholder="Last Name"
                /><br/>

                <input
                    value={formValues.email}
                    name="email"
                    type='email'
                    onChange={handlInputChange}
                    placeholder="Email"
                /><br/>
                <input
                    value={formValues.password}
                    name="password"
                    onChange={handlInputChange}
                    placeholder="Password"
                    type='password'
                />
                <br/>
                <input 
                    value={formValues.confirmPassword}
                    name="confirmPassword"
                    onChange={handlInputChange}
                    placeholder="Confirm Password"
                    type='password'
                /><br/>
                <Button 
                    onClick={handleClick}
                    style={{
                        marginTop:10,
                    }}
                >Register</Button>
                <br/>
                <Link to="/api/usuarios/login">Already Have Account?</Link>
            </Card>
        </Container>
    );
};


export default RegisterUser;