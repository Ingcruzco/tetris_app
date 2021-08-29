import React from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { StyledLink } from './styles/StyledLink';
import { StyledList, StyledNavbar } from './styles/StyleNavbar';
import { types } from '../types/types';
const Navbar = () => {
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch({type:types.resetUser});
    }
    
    return (
        <Router>
            <StyledNavbar>
                <StyledList>
                    <StyledLink 
                    to="/"
                    onClick={handleClick}
                >Logout</StyledLink>
                </StyledList>
            </StyledNavbar>
        </Router>
    );
};

export default Navbar;