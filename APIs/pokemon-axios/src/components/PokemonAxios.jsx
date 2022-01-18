import React, { useState } from "react";
import axios from "axios";

const PokemonAxios = () => {
    let [listOfPokemon, setListOfPokemon] = useState([])
    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118")
        .then(response => {
            setListOfPokemon(response.data.results)
        })
        .catch(err => {
            console.log("errorrr!!!-->", err)
        })
    }
    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            {
                listOfPokemon.map((pokemonObj, index) => {
                    return (
                        <div key={index}>
                            <p>{pokemonObj.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PokemonAxios