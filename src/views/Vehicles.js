import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Profile = () => {
    const params = useParams();
    console.log(params)
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getObj(params.id, params.type);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    console.log(store.obj);
    return (
        <div>
            <h1>Profile of {store.obj ? (params.type==="people" ? store.obj.result.properties.name : params.type==="planets" ? store.obj.result.properties.name : params.type==="vehicles" && store.obj.result.properties.name):"loading..."} of id {params.id} </h1>
        </div>
    )
}
export default Profile;