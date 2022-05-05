import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"



const NavbarLanding = () => {

    const { store, actions } = useContext(Context);

    const [dropdown, setDropdown] = useState(false);

    const OpenClose = () => {
        setDropdown(!dropdown)
    }



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Nav.Link href="/" className="nav-item-list">
                    <h1>
                        StarWars
                    </h1>
                </Nav.Link>

                <div>
                    <Dropdown isOpen={dropdown} toggle={OpenClose}>
                        <DropdownToggle>
                            Favoritos
                        </DropdownToggle>
                        <DropdownMenu>
                            {store.Favorites.map((people, index) =>
                                <div className='row ml-2 mr-2'>
                                    <DropdownItem>
                                        {people}
                                        <button className="btn btn-floating"
                                            onClick={() => actions.deleteFav(index)}>
                                            <i className="material-icons">x</i>
                                        </button>
                                    </DropdownItem>
                                </div>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

        </nav>
    );
};
export default NavbarLanding;
