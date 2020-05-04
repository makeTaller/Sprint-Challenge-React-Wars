import React from 'react';
import CharacterContainer from './CharacterContainer.js';
/* import axios from "axios"; */

const Character =(props)=> {


    return (

          <div>
              <div>
               {props.name}
              </div> 
              <img alt="Profile Image" src={props.imgUrl}/>
              <div>
                  {props.gender}
                  <div>
                      {props.species}
                  </div>
              </div>
        </div>

      )
}

export default Character;
