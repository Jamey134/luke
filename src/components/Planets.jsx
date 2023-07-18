import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Planets = () => {
    const {planetid} = useParams()

    const [name, setName] = useState("");
    const [diameter, setDiameter] = useState("");
    const [climate, setClimate] = useState("");
    const [terrain, setTerrain] = useState("");
    const [population, setPopulation] = useState("");

    const setData = (data) => {

        setName(data.name)
        setDiameter(data.diameter)
        setClimate(data.climate)
        setTerrain(data.terrain)
        setPopulation(data.population)

    }

    const getPlanetData = () => {

        axios.get(`https://swapi.dev/api/planets/${planetid}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err) )

    
    
        }
    useEffect(getPlanetData, []);
    
    return (


        <>
            <h1>{name}</h1>
            <p>Diameter: {diameter} cm</p>
            <p>Climate: {climate} kg</p>
            <p>Terrain: {terrain}</p>
            <p>Population: {population}</p>
        </>

    );
}

export default Planets