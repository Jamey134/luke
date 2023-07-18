import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Search = () => {      

    const [planetppl, setPlanetppl] = useState("characters")
    const [id, setId] = useState()
    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault();

        navigate(`/${planetppl}/${id}`)
    }

    return (
        <form onSubmit={submitForm}>
            <label>Search For:</label>
            <select value={planetppl} onChange= { (e) => setPlanetppl(e.target.value) } >
                <option value="characters">Characters</option>
                <option value="planets">Planets</option>
            </select>

            <label>ID:</label>
            <input type="number" value={id} onChange = { (e) => setId(e.target.value) }/>
            <input type='submit' value="Search"/>
        </form>
    )
}

export default Search