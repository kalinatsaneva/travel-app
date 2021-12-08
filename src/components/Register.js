import { Link, NavLink, useNavigate }  from "react-router-dom";
import {registerUser} from "../services/registerUser"

import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

export const Register = ({
     onRegister
}) => {
     const navigate = useNavigate();

     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     const onRegisterHandler = (e) => {
          e.preventDefault();
      
          let formData = new FormData(e.currentTarget);
          let username = formData.get('username');
          let password = formData.get('password');

          setUsername(username);
          setPassword(password);
          registerUser(username, password);
      
          navigate('/'); 
        }
  

  return (
          
     <section id="register-page" className="register">
     <form id="register-form" onSubmit={onRegisterHandler} >
       
         <p className="field">
           <label htmlFor="username">Username</label>
           <span className="input">
             <input type="text" name="username" id="username"/>
           </span>
         </p>
         <p className="field">
           <label htmlFor="password">Password</label>
           <span className="input">
             <input type="password" name="password" id="password"/>
           </span>
         </p>
         <p className="field">
           <label htmlFor="rePass">Repeat Password</label>
           <span className="input">
             <input type="rePass" name="rePass" id="rePass"/>
           </span>
         </p>
         
         <input className="button submit" type="submit" value="Register" />
       
     </form>
   </section>


);
};


export default Register;