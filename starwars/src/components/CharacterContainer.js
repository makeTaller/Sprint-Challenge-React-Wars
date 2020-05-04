import React, {useState, useEffect} from 'react';
import Character from './Character.js';
import axios from "axios";
import './StarWars.css';


const CharacterContainer=(props)=>{

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
             .then((response) => {
                 setProfile(response.data.results)
                 console.log(response.data.results)
             })
             .catch((error) => {
                 console.log(error)
             })
    }, [])

    console.log(profile)

    return (
            <div>
                 {profile.map((data)=>{
                 return <Character name={data.name} />
                    })}
            </div>
        )
}

export default CharacterContainer;
