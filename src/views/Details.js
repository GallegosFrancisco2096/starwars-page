import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';
import H2card from './CardN2';

const Profile = () => {
    const params = useParams();
    console.log(params)
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getObj(params.id, params.type);



    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    console.log(store.obj.homeworld)



    console.log(store.obj);

    return (
        <div>
            <h1>Details of {store.obj.name}</h1>

            <div>
                <H2card height={store.obj.height} mass={store.obj.mass} hair_color={store.obj.hair_color} skin_color={store.obj.skin_color}
                    eye_color={store.obj.eye_color}
                    gender={store.obj.gender}
                />
            </div>

        </div>
    )
}
export default Profile;