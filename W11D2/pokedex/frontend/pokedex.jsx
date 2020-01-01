import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon} from '../frontend/actions/pokemon_actions';
import {fetchAllPokemon} from '../frontend/util/api_util';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root'
import { HashRouter, Route } from "react-router-dom";


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.selectAllPokemon = selectAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.fetchAllPokemon=fetchAllPokemon;
  window.receiveAllPokemon=receiveAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});

