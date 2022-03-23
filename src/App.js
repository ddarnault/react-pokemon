import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css'
import Pokemon from "./Components/Pokemon";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [pokemons, setPokemons] = useState(null);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`${endpoint}`);
                console.log(result.data)
                setPokemons(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();

    }, [endpoint]);

    return (

        <div>
            <button
                type='button'
                onClick={()=> setEndpoint(pokemons.next)}
            >
                Previous
            </button>

            <button
                type='button'
                onClick={()=> setEndpoint(pokemons.previous)}
            >
                Next
            </button>
            {pokemons && pokemons.results.map((card) => {
                return <Pokemon endpoint={card.name}/>
            })}
        </div>

    );
}

export default App;