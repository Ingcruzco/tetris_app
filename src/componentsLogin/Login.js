import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StyledCardLogin } from './styles/StyledCardLogin';
import { ButtonLogin, StyledCredentials, StyledH3, StyledInput, StyledLogin } from './styles/StyledLogin';
import jwtDecode from 'jwt-decode';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { userLogged } from '../helpers/auth';
import { loginAction } from '../actions/users';
import Swal from 'sweetalert2';

const LOGIN_URL_STRING='http://localhost:8080/api/usuarios/login';

const Login = props => {
    //const decoded=jwt.decode(token);
    const [formState,handlInputChange]=useForm();
    const data={
            "email":formState.email,
            "password":formState.password,
        }
    const dispatch=useDispatch();


    const handleClickButton=async ()=>{
        try{
            const response=await axios({
                method:'POST',
                url:LOGIN_URL_STRING,
                data,
                headers:{ 'content-type': 'application/json' },
               });
               const decode=jwtDecode(response.data);
               console.log(loginAction(decode))
               dispatch(loginAction(decode));
        }catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Bad Request',
                text: err.response.data.msg,
              });      
        }
         
    }
    return (
        <StyledLogin>
            <StyledCardLogin>
                <h1 style={{
                    color:'#9B59B6',
                    marginTop:"10%",
                }}
                >Sign In
                </h1>
                <StyledCredentials>
                    <StyledH3>Username</StyledH3>
                    <StyledInput 
                        name="email"
                        onChange={handlInputChange}
                        value={formState.email||''}
                        placeholder="example@gamil.com"
                    />
                    <StyledH3>Password</StyledH3>
                    <StyledInput 
                        type="password" 
                        placeholder="Password"
                        onChange={handlInputChange}
                        name="password"
                        value={formState.password ||''}
                    />
                    
                  </StyledCredentials >
                  <ButtonLogin onClick={handleClickButton}>Sign In</ButtonLogin>
                  <div>
                      <Link to="/api/usuarios/register">New User? <span>Signup</span></Link>
                  </div>
                  <div></div>
                  
            </StyledCardLogin>
  
        </StyledLogin>
    );
};


export default Login;