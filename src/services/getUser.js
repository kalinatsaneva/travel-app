import Parse from 'parse/dist/parse.min.js';


export async function getCurrentUser() {
     const currentUser = await Parse.User.current();
     console.log(currentUser)
  
     return currentUser;
   };

   export const isAuthenticated = () => {
        console.log(Boolean(getCurrentUser()))
     return Boolean(getCurrentUser());
};