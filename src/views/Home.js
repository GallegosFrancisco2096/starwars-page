import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../store/appContext';
import Hcard from '../Components/Card';


const Home = () => {
    const { store, actions } = useContext(Context);
    const [type, setType] = useState("");
    useEffect(() => {
        actions.getPeople();
        actions.getPlanets();
        actions.getVehicles();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    console.log(store.Favorites)

    return (
            <div className='container-fluid overflow-hidden row'>
                <h1>Personaje</h1>
                {store.personajes.map(people =>
                    <div className='ml-2 mr-2 col-4 my-4'>

                        <Hcard name={people.name} type={"/people/"} uid={people.uid} />
                    </div>
                )}
                <h1>Planetas</h1>
                {store.planetas.map(planet =>
                    <div className='ml-2 mr-2 col-4 my-4'>

                        <Hcard name={planet.name} type={"/planets/"} uid={planet.uid} />

                    </div>

                )}
                <h1>Vehiculos</h1>
                {store.vehiculos.map(vehicles =>
                    <div className='ml-2 mr-2 col-4 my-4'>

                        <Hcard name={vehicles.name} type={"/vehicles/"} uid={vehicles.uid} />

                    </div>

                )}
            </div>
            
       );
};
export default Home;





