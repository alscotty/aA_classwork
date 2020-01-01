import * as ApiUtil from '../util/api_util'


export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_A_POKEMON = 'RECEIVE_A_POKEMON';


export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon: pokemon
})

export const receiveAPokemon = (payload) => ({
  type: RECEIVE_A_POKEMON,
  payload: payload
  
})


export const requestAllPokemon = () => (dispatch) => (
  ApiUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)


export const requestAPokemon = (poke) => (dispatch) => (
  ApiUtil.fetchAPokemon(poke)
    .then(poke => dispatch(receiveAPokemon(poke)))
)