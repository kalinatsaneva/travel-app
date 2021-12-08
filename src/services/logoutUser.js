import { useState } from "react";
import { Link, NavLink, useNavigate }  from "react-router-dom";

import Parse from 'parse/dist/parse.min.js';
import { getCurrentUser } from "./getUser";



export async function logoutUser() {
     try {
       await Parse.User.logOut();
      
       const currentUser = await Parse.User.current();
       if (currentUser === null) {
         alert('Success! No user is logged in anymore!');
         //useNavigate('/')
       }
      
       getCurrentUser();
       return true;
     } catch (error) {
       alert(`Error! ${error.message}`);
       return false;
     }
     
   };