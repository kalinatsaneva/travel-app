import { Link, NavLink } from "react-router-dom";

const Header = () => {
    

     return (
          <header id="header" className="fixed-top header">
          <div className="container d-flex align-items-center justify-content-between">
      
            <div className="logo">
              <h1 className="text-light"><a href="index.html"><span>Skitnik Bg</span></a></h1>
              
              <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
            </div>
      
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">All trips</a></li>
                <li><a className="nav-link scrollto" href="#services">My Trips</a></li>
                <li><a className="nav-link scrollto" href="#portfolio">Login</a></li>
                <li><a className="nav-link scrollto" href="#team">Register</a></li>
                <li><a className="nav-link scrollto" href="#team">Logout</a></li>
      
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
      
          </div>
        </header>
     )
 };
 
 export default Header;