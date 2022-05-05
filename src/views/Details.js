import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';
import H2card from '../Components/CardN2';

const Profile = () => {
    const params = useParams();
    console.log(params)
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getObj(params.id, params.type);



    }, []) // eslint-disable-line react-hooks/exhaustive-deps

 
    if (params.type === "people") { 
        return (
            <div className=' d-inline-block m-3'>
                <h1>Details of {store.obj.name}</h1>
                <div>
                    <H2card height={store.obj.height} mass={store.obj.mass} hair_color={store.obj.hair_color} skin_color={store.obj.skin_color}
                        eye_color={store.obj.eye_color}
                        gender={store.obj.gender}
                        type={params.type}
                    />
                </div>
    
            </div>
        )
    }
    if (params.type === "vehicles") { 
        return (
            <div className='justify-content-center'>
                <h1>Details of {store.obj.name}</h1>
    
                <div>
                    <H2card model={store.obj.model} manufacturer={store.obj.manufacturer} cost_in_credits={store.obj.cost_in_credits} length={store.obj.length}
                        passengers={store.obj.passengers}
                        max_atmosphering_speed={store.obj.max_atmosphering_speed}
                        cargo_capacity={store.obj.cargo_capacity}
                        type={params.type}
                    />
                </div>
    
            </div>
        )

    }
    if (params.type === "planets") { 
        return (
            <div className='justify-content-center'>
                <h1>Details of {store.obj.name}</h1>
    
                <div>
                    <H2card diameter={store.obj.diameter} rotation_period={store.obj.rotation_period} orbital_period={store.obj.orbital_period} gravity={store.obj.gravity}
                        population={store.obj.population}
                        climate={store.obj.climate}
                        terrain={store.obj.terrain}
                        type={params.type}
                        surface_water= {store.obj.surface_water}
                    />
                </div>
    
            </div>
        )

    }

    
}
export default Profile;