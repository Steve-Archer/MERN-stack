import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Content = () => {
    let { input, num } = useParams()
    let [starWarsData, setStarWarsData] = useState([])
    let [error, setError] = useState(false)
    let fetchString = `https://swapi.dev/api/${input}/${num}`
    useEffect(() => {
        axios.get(fetchString)
            .then(response => {
                setStarWarsData(response.data)
                setError(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
    })
    return (
        <div>
            {
                error == true
                    ? <div>
                        <h1>These aren't the droids you're looking for...</h1>
                        <img src="https://i.kym-cdn.com/entries/icons/facebook/000/018/682/obi-wan.jpg" alt="obiwon" />
                    </div>
                    : input == "people" ?
                        <div>
                            <h1>{starWarsData.name}</h1>
                            <h3>Height: {starWarsData.height}</h3>
                            <h3>Mass: {starWarsData.mass}</h3>
                            <h3>Hair Color: {starWarsData.hair_color}</h3>
                            <h3>Skin Color: {starWarsData.skin_color}</h3>
                        </div>
                        : <div>
                            <h1>{starWarsData.name}</h1>
                            <h3>Diameter: {starWarsData.diameter}</h3>
                            <h3>Climate: {starWarsData.Climate}</h3>
                            <h3>Gravity: {starWarsData.gravity}</h3>
                            <h3>Terrain: {starWarsData.terrain}</h3>
                        </div>
            }
        </div>
    )
}
export default Content




