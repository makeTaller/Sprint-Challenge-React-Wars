import React, {useState, useEffect} from 'react';
import axios from "axios";

import Person from "./Person"


const PersonContainer = () => {

  const [personData, setPersonData] = useState([]);






  useEffect (()=> {
   
    axios.get("https://swapi.co/api/people/")
    .then ( 
     
     res => setPersonData(res.data.results)
    )
  
    .catch(err => console.log(err))
  }, []);

console.log(personData);
     
  
return (
 
    personData.map( (item) => { 
    
        return(
    
            <Person key={item.name} name={item.name} height={item.height} mass={item.mass} hairColor={item.hair_color} skinColor={item.skin_color} eyeColor={item.eye_color} birthYear={item.birth_year} gender={item.gender} homeworld={item.homeworld} films={item.films} species={item.species} vehicles={item.vehicles} starships={item.starships} created={item.created} edited={item.edited} url={item.url} />
  
        )
    
    })
      

)
  
    
    
}


export default PersonContainer;
