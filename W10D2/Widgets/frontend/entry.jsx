import React from 'react';
import ReactDOM from 'react-dom';
import Widget from "./widget";

document.addEventListener('DOMContentLoaded', ()=>{
  let root=document.getElementById('root');

  ReactDOM.render(<Widget />, root);
});
