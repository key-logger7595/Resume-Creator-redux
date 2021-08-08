import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/authActions';

const SignedOutLinks = (props) =>{
    return (
        <ul id="nav-mid">
            
            <li className="holder-pricing">
                <NavLink className="btn-nvt-gm" to="/about-us">
                    About Us
                </NavLink>
            </li>
            <li className="signup ">
                <NavLink className=" btnv-1" to="/register">
                    Register
                </NavLink>
            </li>
            <li className="signin">
                <NavLink className="text-blue btnv-3" to="/login">
                    Sign In
                </NavLink>
            </li>

        </ul>
    )
}
export default SignedOutLinks;
