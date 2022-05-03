import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Hcard from './Card';

const Home = () => {
    const { store, actions } = useContext(Context);
    const [type, setType] = useState("");
    useEffect(() => {
        actions.getPeople();
        actions.getPlanetas();
        actions.getVehiculos();
    }, [])

    console.log(store.personajes)
    return (
        <div className='container overflow-hidden '>



            <h1>Personaje</h1>
            {store.personajes.map(people =>
                <div className='row ml-2 mr-2'>

                    <Hcard name={people.name} type={"/people/"} uid={people.uid} />

                </div>


            )}

            <h1>Planetas</h1>
            {store.planetas.map(planeta =>
                <div className="card d-inline-block m-3" key={planeta.uid} style={{ width: "16rem" }}>
                    <img className="card-img-top" src={"https://w7.pngwing.com/pngs/386/163/png-transparent-faq-icon-question-mark-pics-angle-text-logo.png"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> {planeta.name} </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
<<<<<<< HEAD
                            <Link to={"/planets/" + planeta.uid} className="btn btn-primary">Go somewhere</Link>
=======
                            <Link to={"/profile/planets/" + planeta.uid} className="btn btn-primary">Go somewhere</Link>
>>>>>>> f95ecf9307a69d41bada600f3063983387e4144a
                            <button className="btn btn-warning"> fav </button>
                        </div>
                    </div>
                </div>
            )}
            <h1>Vehiculos</h1>
            {store.vehiculos.map(vehiculo =>
                <div className="card d-inline-block m-3" key={vehiculo.uid} style={{ width: "16rem" }}>
                    <img className="card-img-top" src={"https://w7.pngwing.com/pngs/386/163/png-transparent-faq-icon-question-mark-pics-angle-text-logo.png"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> {vehiculo.name} </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between'>
                            <Link to={"/profile/people/" + vehiculo.uid} className="btn btn-primary">Go somewhere</Link>
                            <button className="btn btn-warning"> fav </button>
                        </div>
                    </div>
                </div>
            )}
        </div>);
};
export default Home;