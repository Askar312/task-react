import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
         

            
            <NavLink to ="/rec">Recepties</NavLink>
            <NavLink to ="/count">Count</NavLink>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
            <Link to={'/add'}>
            <NavDropdown.Item href="#action/3.1">Add Contact</NavDropdown.Item>
            </Link>
            
            <Link to={'/list'}>

            <NavDropdown.Item href="#action/3.3">List Contact</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </div>
    );
};
export default Navbar;