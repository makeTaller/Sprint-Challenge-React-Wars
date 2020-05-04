import React from 'react';
import './StarWars.css';


const Character=(props)=>{


    return (
        props.profile.map(item =>{
            return(
                <div>
                    <img alt="profile image" src={ props.imgUrl }/>
                </div>
            )
        })
    )

};

export default Character;
