import { Link, NavLink } from "react-router-dom";

const HomePage = () => {

     return (
          <div id="home" >
            
               <h1>Discover new places.</h1>
               <h2>Plan trips.</h2>
               <h3>Meet new friends.</h3>
               <a className="explore" href="/all-trips">All trips</a>
               
          </div>
          
     )
   
};

export default HomePage;