import { useState } from "react";
import Parse from 'parse/dist/parse.min.js';
import { getCurrentUser } from "./getUser";


export async function loginUser(username, password) {
   
     try {
       const loggedInUser = await Parse.User.logIn(username, password);
      
       alert(
         `Success! User ${loggedInUser.get(
           'username'
         )} has successfully signed in!`
       );
     
       const currentUser = await Parse.User.current();
       console.log(loggedInUser === currentUser);
      
       getCurrentUser();
       return true;
     } catch (error) {
      
       alert(`Error! ${error.message}`);
       return false;
     }
   };