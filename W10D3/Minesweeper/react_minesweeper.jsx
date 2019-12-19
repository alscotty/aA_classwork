import React from 'react';
import ReactDOM from 'react-dom';
import Game from "./components/Game";

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');

    ReactDOM.render(<Game />, root);
});
