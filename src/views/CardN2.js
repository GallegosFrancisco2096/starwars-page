import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";





const H2card = (props) => {

  
    return (

        < div className="card d-inline-block m-3" style={{ width: "25rem" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <ul>
                    <li> Altura : {props.height}</li>
                    <li> Peso : {props.mass}</li>
                    <li> Color de pelo : {props.hair_color}</li>
                    <li> Color de piel : {props.skin_color}</li>
                    <li> Color de ojos : {props.eye_color}</li>
                    <li> Genero : {props.gender}</li>
                </ul>

            </div>
        </div >
    )

}
export default H2card
