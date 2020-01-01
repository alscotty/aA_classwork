import {RECEIVE_A_POKEMON} from '../actions/pokemon_actions'

const itemsReducer = (state = {}, action) => {
  let newState = {}
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_A_POKEMON:
      const allItems = action.payload.items
      return Object.assign(newState, allItems)

    default:
      return state;
  }
}

export default itemsReducer;