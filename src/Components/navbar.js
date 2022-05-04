import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import {  Nav } from "react-bootstrap";



const NavbarLanding = () => {

    
 


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Nav.Link href="/" className="nav-item-list">
                    <h1>
                        StarWars
                    </h1>
                </Nav.Link>
                
            </div>
        </nav>
    );
};
export default NavbarLanding;
