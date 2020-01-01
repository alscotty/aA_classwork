import React from 'react'
import { Link } from "react-router-dom";

export const PokemonIndexItem =(props)=>{
  return(
    <div key={props.poke.id}>
      <li >
        <Link to={`/pokemon/${props.poke.id}`}> 
          {props.poke.name}
        </Link>
      </li>
      <li >
        <img src={`${props.poke.imageUrl}`} alt=":(" />
      </li>
    </div>
  )
}

export default PokemonIndexItem;