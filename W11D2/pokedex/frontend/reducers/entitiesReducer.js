import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemsReducer from './itemsReducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer

});


export default entitiesReducer;