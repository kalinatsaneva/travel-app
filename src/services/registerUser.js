import { useState } from "react";
import Parse from 'parse/dist/parse.min.js';


export async function registerUser (username, password) {
    

     try {
      
       const createdUser = await Parse.User.signUp(username, password);
       alert(
         `Success! User ${createdUser.getUsername()} was successfully created!`
       );
       return true;
     } catch (error) {
     
       alert(`Error! ${error}`);
       return false;
     }
   };



 