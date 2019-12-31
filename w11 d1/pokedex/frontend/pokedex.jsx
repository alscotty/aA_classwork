import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon} from '../frontend/actions/pokemon_actions';
import {fetchAllPokemon} from '../frontend/util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex test</h1>, rootEl);
});