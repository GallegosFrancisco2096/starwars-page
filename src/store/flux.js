const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: [],
<<<<<<< HEAD
            obj: [],
            fav: []
        },
        actions: {
            getPeople: () => {
                fetch("https://www.swapi.tech/api/people/")
=======
            obj: {},
            fav: []
        },
        actions: {
            getPersonajes: (id) => {
                fetch(`https://www.swapi.tech/api/people/${id}`)
>>>>>>> f95ecf9307a69d41bada600f3063983387e4144a
                    .then(res => res.json())
                    .then(data => setStore({ personajes: data.results }));
            },
            getPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({ planetas: data.results }));
            },
            getVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({ vehiculos: data.results }));
            },
            getObj: (id, type) => {
                fetch("https://www.swapi.tech/api/" + type + "/" + id)
                    .then(response => response.json())
                    .then(data => setStore({ obj: data }));
            },
            getFav: (favo) => {
                const store = getStore();
                if (store.fav.includes(favo)){
                    return console.log("nop")
                }
                setStore({ fav: [...store.fav, favo] })
            },
            deleteFav: (index)=>{
                const store = getStore();
                store.fav.splice(index,1);
                setStore({fav : store.fav})
            }

        }
    }
}

export default getState;