import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";


const Profile = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerVehicles();
      },[]); // eslint-disable-line react-hooks/exhaustive-deps

    console.log(store.Vehicles[0].name)

    return <h1>Profile {store.Vehicles[0].name} </h1>
}
export default Profile 