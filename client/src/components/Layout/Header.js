import React from 'react';
import {NavLink,Link} from 'react-router-dom'
const Header = () => {
return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
    <button className="navbar-toggler"
    type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarTogglerDemo01" 
    aria-controls="navbarTogglerDemo01"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand"  href="#">
            E.S.P.A.D.A

            </Link>



    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink to="/" className="nav-link" >
            Home
            </NavLink>
        </li>



        <li className="nav-item">
            <NavLink to="/catalog" className="nav-link" >
            Catalog
            </NavLink>
        </li>



        <li className="nav-item">
            <NavLink to="/aboutme" className="nav-link">
            About Me
            </NavLink>
        </li>
    </ul>






    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
            <NavLink to="/register" className="nav-link" >
            Register
            </NavLink>
        </li>

        <li className="nav-item">
            <NavLink to="/login" className="nav-link" >
            login
            </NavLink>
        </li>
        
        <li className="nav-item">
            <NavLink to="/cart" className="nav-link" >
            cart(0)
            </NavLink>
        </li>

    </ul>

</div>

</div>

</nav>

</> 
);
};

export default Header ;