import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";





const H2card = (props) => {

    if ( props.type === "people" ) {
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
    if ( props.type === "vehicles" ) {
        return (
            < div className="card d-inline-block m-3" style={{ width: "25rem" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <ul>
                        <li> Modelo : {props.model}</li>
                        <li> Fabricante : {props.manufacturer}</li>
                        <li> Precio en Creditos : {props.cost_in_credits}</li>
                        <li> Velocidad Max, a presion atmosferica : {props.max_atmosphering_speed}</li>
                        <li> Capacidad de carga: {props.cargo_capacity}</li>
                        <li> Pasajeros: {props.passengers}</li>
                    </ul>
    
                </div>
            </div >
            
    )
    }
    if ( props.type === "planets" ) {
        return (
            < div className="card d-inline-block m-3" style={{ width: "25rem" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <ul>
                        <li> Diametro : {props.diameter}</li>
                        <li> Periodo de rotacion [hr] : {props.rotation_period}</li>
                        <li> Periodos orbital [dias]: {props.orbital_period}</li>
                        <li> Gravedad [g]: {props.gravity}</li>
                        <li> Poblacion: {props.population}</li>
                        <li> Clima: {props.climate}</li>
                        <li> Terreno: {props.terrain}</li>
                        <li> Existencia de agua superficial: {props.surface_water}</li>
                    </ul>
    
                </div>
            </div >
            
    )
    }
}
export default H2card
