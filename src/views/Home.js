import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../store/appContext';
import Hcard from '../Components/Card';


const Home = () => {
    const { store, actions } = useContext(Context);
    const [type, setType] = useState("");
    useEffect(() => {
        actions.getPeople();
        actions.getPlanetas();
        actions.getVehiculos();

    }, [])

    console.log(store.Favorites)

    return (

        <div className='d-flex row container-fluid'>

            <div className='container overflow-hidden col-8'>
                <h1>Personaje</h1>
                {store.personajes.map(people =>
                    <div className='row ml-2 mr-2'>

                        <Hcard name={people.name} type={"/people/"} uid={people.uid} />

                    </div>
                )}
                <h1>Planetas</h1>
                {store.planetas.map(planet =>
                    <div className='row ml-2 mr-2'>

                        <Hcard name={planet.name} type={"/planets/"} uid={planet.uid} />

                    </div>

                )}
                <h1>Vehiculos</h1>
                {store.vehiculos.map(vehicles =>
                    <div className='row ml-2 mr-2'>

                        <Hcard name={vehicles.name} type={"/vehicles/"} uid={vehicles.uid} />

                    </div>

                )}
            </div>
            <div className='col-3'>
                <h1>Favorites</h1>
                {store.Favorites.map((people, index) =>
                    <div className='row ml-2 mr-2'>


                        <div>
                            <li >

                                {people}
                                <button className="btn btn-floating"
                                    onClick={() => actions.deleteFav(index)}>
                                    <i className="material-icons">x</i>
                                </button>
                            </li>
                        </div>

                    </div>
                )
                }
            </div>
        </div>);
};
export default Home;





