import React, {useState, useEffect} from 'react';
import axios from "axios";

const Character = () => {

const [profile, setProfile] = useState([]);

    useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => {
          setProfile(response.profile.results)
          console.log(response.data.results)
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])

    return (

      profile.map(() => {
          return(
          <div>
            <img alt="" src=""/>
            <div>{profile.name}</div>
        </div>
      )
        }

      )

    )
}

export default Character;
