import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
  let newState = {}
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_POKEMON :
      const allPokemon = action.pokemon
      return Object.assign(newState, allPokemon)
      break;
  
    default:
      return state;
  }
}