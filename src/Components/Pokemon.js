import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Pokemon.css';



function Pokemon({endpoint}) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`${endpoint}`);
                console.log(result.data)
                setPokemon(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();

    }, []);

    console.log(pokemon)

    return (
        <div>
            <article>
                {pokemon &&
                <>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={`a gorgeous picture of ${pokemon.name}`}/>
                    <p>Moves: {pokemon.moves.length}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <h3>Abilities:</h3>
                    <ul>

                        {pokemon.abilities.map((ab) => {
                            return (<li key={ab.slot}>
                                {ab.ability.name}
                            </li>)
                        })}
                    </ul>

                </>
                }
            </article>
        </div>

    );
}

export default Pokemon;