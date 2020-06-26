import React from 'react';

import { NavLink } from 'react-router-dom';


import logo from './../../assets/logo.webp'
import bell from './../../assets/bell.svg'


import './header.css';

const Header = () => (
        <div className="Header"  >
            <div className="left ">
                <img className="lftAlign" src={logo}  alt="Logo" height="50px" width="150px" />
                <NavLink to="/dashboard" className="lftAlign">Dashboard</NavLink>
                <NavLink to="/profile" className="lftAlign">profile</NavLink>
            </div>
           <div className="right">
                <img className="lftAlign" src={bell} alt="Notification Bell" height="20px" />
                <p className="lftAlign" >John Miller</p>
           </div>
        </div>
)

export default Header;