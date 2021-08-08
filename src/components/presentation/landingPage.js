import React from 'react';
import logo from "../../static/images/resume.png";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
const Lp = (props) => {
   let link = props.auth.uid?"/getting-started":"/login";
    return (    
    
        <div className="container  lp-page center">          
        <div className="section">
         <h1>Create a resume that stands out</h1>
           <p >Create a Resume that perfectally describes your skils and match job profile.</p>
            <br></br>
           <div >
                
                <NavLink to={link} className="btn hvr-float-shadow"><span>Get Started for Free</span>
                </NavLink>
                
                </div>
                <img src={logo}   className="lp-resume" alt="logo" />
         </div>        
         </div>
    
        );
}
const mapStateToProps = (state)=>{
  return {
    auth:state.firebase.auth
  }
} 

export default connect(mapStateToProps)(Lp);