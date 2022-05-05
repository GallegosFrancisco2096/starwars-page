const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: [],
            obj: [],
            Favorites: []
        },
        actions: {
            getPeople: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({ personajes: data.results }));
            },
            getPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({ planetas: data.results }));
            },
            getVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({ vehiculos: data.results }));
            },
            getObj: (id, type) => {
                fetch("https://www.swapi.tech/api/" + type + "/" + id)
                    .then(response => response.json())
                    .then(data => setStore({ obj: data.result.properties }));
            },
            getFavoritesList: (Add) => {
                const store = getStore();
                if (store.Favorites.includes(Add)){
                    return console.log("Previamente incluido")
                }
                setStore({ Favorites: [...store.Favorites, Add] })
            },
            deleteFav: (index)=>{
                const store = getStore();
                store.Favorites.splice(index, 1);
                setStore({Favorites : store.Favorites})
            }

        }
    }
}

export default getState;