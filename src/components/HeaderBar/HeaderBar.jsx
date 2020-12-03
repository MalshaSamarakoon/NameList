import React from 'react';
import {Link} from 'react-router-dom';

function HeaderBar(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 

         <span className="navbar-brand mb-0 h1"> Name List </span> 

         <ul className= "navbar-nav">
             <li className= "nav-item"> <a className= "nav-link" href="#"> <Link className="nav-link" to="/home"> Home</Link> </a> </li>
             <li className= "nav-item"> <a className= "nav-link" href="#"> <Link className="nav-link" to="/about">About Us</Link> </a> </li>
             <li className= "nav-item"> <a className= "nav-link" href="#"> <Link className="nav-link" to="/list">Show Name List</Link> </a> </li>
        </ul>

    </nav>
    );
}
export default HeaderBar;

