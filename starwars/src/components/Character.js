import React from 'react';
import CharacterContainer from './CharacterContainer.js';
/* import axios from "axios"; */

const Character =(props)=> {


    return (

          <div>
              <h1>
               {props.name}
              </h1> 
              <img alt="Profile Image" src={props.imgUrl}/>
            <ul> gender: {props.gender} </ul>
            <ul>species: {props.species} </ul>
            <ul> status: {props.status} </ul>
        </div>

      )
}

export default Character;
