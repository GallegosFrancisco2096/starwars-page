import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Button, Navbar } from "react-bootstrap";

const NavbarLanding = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Nav.Link href="/" className="nav-item-list">
                    <h1>
                    StarWars
                    </h1>
                </Nav.Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <Nav.Link href="vehicles" className="nav-item-list">
                            Vehicles
                        </Nav.Link>
                        <Nav.Link href="planets" className="nav-item-list">
                            Planets
                        </Nav.Link>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavbarLanding;
