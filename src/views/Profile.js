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
  while (number < 3);
<<<<<<< HEAD
    useEffect(() => {

      for (const Personaje of Personajes ){

        let Info = []
        let id = Personaje
        actions.getPersonajes(id)
        Info.push(store.personajes)
        console.log(Info)
        
        
      }

       
      
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    
    console.log(store.personajes)
    

    
=======

  console.log(Personajes)
    useEffect(() => {
      for(const Personaje of Personajes) {
        let id = Personaje
        console.log(id)
        actions.getPersonajes(id)
      }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    console.log(store.personajes)
>>>>>>> f95ecf9307a69d41bada600f3063983387e4144a




    return (<h1>Profile  </h1>)
  }
export default Profile 