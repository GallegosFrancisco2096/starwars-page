import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Hcard from './Card';
import Carousel from 'react-bootstrap/Carousel'
import { Container, Card, Row, Col } from "react-bootstrap";




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
        <div className='container-fluid overflow-hidden row'>

            <div >
                <h1> Personajes </h1>
                {store.personajes.map((people) => (


                    <Hcard name={people.name} type={"/people/"} uid={people.uid} Title={"Personaje"} />

                ))}
            </div>

            <div>
                <h1> Planeta </h1>

                {store.planetas.map((planet) => (
                    <Hcard name={planet.name} type={"/planets/"} uid={planet.uid} Title={"Planetas"} />
                )

                )}
            </div>
            <div>
                <h1> Vehiculos </h1>
                {store.vehiculos.map((vehicle) =>
                    (<Hcard name={vehicle.name} type={"/vehicles/"} uid={vehicle.uid} Title={"Vehiculos"} />)

                )}
            </div>
        </div>);
};
export default Home;