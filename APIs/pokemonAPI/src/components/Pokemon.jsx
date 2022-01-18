import React, { useState } from "react";

const Pokemon = () => {
    let [listOfPokemon, setListOfPokemon] = useState([])
    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
            .then(response => {
                return response.json()
            })
            .then(response => {
                setListOfPokemon(response.results)
                console.log(response)
            })
            .catch(error => {
                console.log("error: ", error)
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
export default Pokemon