import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';





const Hcard = (props) => {

    return (


        < div className="card d-inline-block m-3" style={{ width: "25rem" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    <Link to={props.type + props.uid} className="btn btn-primary">Details</Link>
                    <a href="#" className="btn btn-primary ">Add To Favorites</a>
                </div>
            </div>
        </div >
    )

}
export default Hcard





