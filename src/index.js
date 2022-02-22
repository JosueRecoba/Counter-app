import React from 'react'; 
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';


import './index.css';
import CounterApp from './CounterAPP';


const divRoot = document.querySelector('#app');

ReactDOM.render(<CounterApp value= {10}  /> , divRoot);
