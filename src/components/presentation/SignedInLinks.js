import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/authActions';

const SignedInLinks = (props) =>{
    return (
      <ul>
        <li>
          <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
          </NavLink>
        </li>
        <li className="signin ">
          <NavLink className="  " to="/">
            {props.profile.email}
          </NavLink>
        </li>
        <li className="signin">
          <button className="text-blue btnv-3" onClick={props.signOut}>
            Signout
          </button>
        </li>
      </ul>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut:()=>dispatch(authActions.signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);