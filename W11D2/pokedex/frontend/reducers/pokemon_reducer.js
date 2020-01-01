import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  let newState = {}
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_POKEMON :
      const allPokemon = action.pokemon
      return Object.assign(newState, allPokemon)
      break;
    case RECEIVE_A_POKEMON :
      const poke = action.payload.poke
      return Object.assign(newState, poke)
      break;
  
    default:
      return state;
  }
}

export default pokemonReducer;