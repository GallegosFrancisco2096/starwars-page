import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";


const Profile = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerPlanets();
      },[]); // eslint-disable-line react-hooks/exhaustive-deps

    console.log(store.Planets[0].name)

    return <h1>Profile {store.Planets[0].name} </h1>
}
export default Profile 