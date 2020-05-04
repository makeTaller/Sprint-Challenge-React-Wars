import React, {useState, useEffect} from 'react';
import Character from './Character.js';
import {Jumbotron, Container } from 'reactstrap'
import axios from "axios";
import './StarWars.css';


const CharacterContainer=()=>{

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
                <div>
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3"> Rick and Morty </h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </Container>
                    </Jumbotron>
                </div>
                 {profile.map((data)=>{
                     return <Character
                                name={data.name}
                                imgUrl={data.image}
                                gender={data.gender}
                                species={data.species}
                                status={data.status}
                     />
                    })}
            </div>
        )
}

export default CharacterContainer;
