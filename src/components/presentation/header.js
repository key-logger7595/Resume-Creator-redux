import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";


const Header = (props) => {
  
  
  const {auth,profile} = props;

  const  links = auth.uid ? <SignedInLinks profile={profile}/> :<SignedOutLinks/>
  return (  
    <header className="header">
      <nav className="nav">
        <a href="/" className="holder-logo">
          <img className='logo' src={logo} alt={`Logo-Pep`}></img>
        </a>
        <div className="header-links full-height">

          {links}


        </div>
      </nav>
    </header>

  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    auth:state.firebase.auth,
    profile:state.firebase.profile
  }
}


export default connect(mapStateToProps)(Header);