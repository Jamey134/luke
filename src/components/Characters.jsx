import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Characters = () => {
    const {characterid} = useParams()

    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [mass, setMass] = useState("");
    const [hairColor, setHairColor] = useState("");
    const [skinColor, setSkinColor] = useState("");

    const setData = (data) => {

        setName(data.name)
        setHeight(data.height)
        setMass(data.mass)
        setHairColor(data.hair_color)
        setSkinColor(data.skin_color)

    }

    const getCharacterData = () => {

        axios.get(`https://swapi.dev/api/people/${characterid}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err) )

    
    
        }
    useEffect(getCharacterData, []);
    
    return (



        <>
            <h1>{name}</h1>
            <p>Height: {height} cm</p>
            <p>Mass: {mass} kg</p>
            <p>Hair Color: {hairColor}</p>
            <p>Skin Color: {skinColor}</p>
        </>

    );
}

export default Characters