import React from 'react'; 
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraAPP';


import './index.css';
import CounterApp from './CounterAPP';


const dicRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value= {10}  /> , divRoot);
