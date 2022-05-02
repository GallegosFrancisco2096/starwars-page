import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";


const Profile = () => {

  const { store, actions } = useContext(Context);
  
  let number = 0
  let Personajes = []

  do {
    number = number + 1
    Personajes.push(number)
  }
  while (number < 89);

  console.log(Personajes)

  let id = 1
    useEffect(() => {
      actions.obtenerPersonajes(id)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


  for (const Personaje of Personajes) {
    

    console.log(store.Personaje)


    return <h1>Profile {store.Personaje.name} </h1>


  }

}
export default Profile 