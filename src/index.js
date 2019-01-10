import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import './index.css';
import * as serviceWorker from './serviceWorker';

render(
    <Router />, 
    document.getElementById('root')
);

serviceWorker.unregister();
