import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import {App} from './App';
import { SnackbarProvider } from "notistack";
import './utils/firebase'

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
    <App />
    </SnackbarProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

