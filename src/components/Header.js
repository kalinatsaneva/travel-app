import { Link, NavLink } from "react-router-dom";
import { isAuthenticated } from "../services/getUser";
import { logoutUser } from "../services/logoutUser";

const Header = ({
     isAuthenticated
}) => {

  let guestNav = (
    <div id="guest">
    <Link to="/all-trips">All Trips</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>

    </div>
  );

  let userNav = (
    <div id="user">
       
    <Link to="/all-trips">All Trips</Link>
    <Link to="/my-trips">My trips</Link>
    <Link onClick={ logoutUser }to="/logout">Logout</Link>
  </div>
  )

  return (
    <header id="header" className="fixed-top header">
      <h1> <Link to="/">Skitnik</Link></h1>
      {isAuthenticated
            ? userNav
           : guestNav
          }
      <nav>
     

     

</nav>
    </header>
  )
};

export default Header;