
import { Link, NavLink, useNavigate }  from "react-router-dom";
import { loginUser } from "../services/loginUser";
import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

const Login = () => {

     const navigate = useNavigate();

     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [currentUser, setCurrentUser] = useState(null);

     const onLoginHandler = (e) => {
          e.preventDefault();
      
          let formData = new FormData(e.currentTarget);
          let username = formData.get('username');
          let password = formData.get('password');

          setUsername(username);
          setPassword(password);
          loginUser(username, password);
      
          navigate('/'); 
        }

     return (
          
               <section id="login-page" className="login">
               <form id="login-form" onSubmit={onLoginHandler} >
                 
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
                   
                   <input className="button submit" type="submit" value="Login"/>
                 
               </form>
             </section>
          
          
     )
   
};

export default Login;