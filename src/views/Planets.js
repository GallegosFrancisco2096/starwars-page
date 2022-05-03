import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Profile = () => {
  
    
    let {id , type} = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getObj(id, type);
    }, [])
    console.log(store.obj);
    return (
        <div>
            <h1>Profile of  </h1>
        </div>
    )
}
export default Profile;