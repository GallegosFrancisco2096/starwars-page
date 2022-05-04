import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';





const Hcard = (props) => {


    const { store, actions } = useContext(Context);


    return (
        < div className="card d-inline-block m-3" style={{ width: "25rem" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    <Link to={props.type + props.uid} className="btn btn-primary">Details</Link>
                    <button type="button" className="btn btn-dark" onClick={()=>actions.getFavoritesList(props.name)}>Add To Favorites</button>
                </div>
            </div>
        </div >
    )

}
export default Hcard





