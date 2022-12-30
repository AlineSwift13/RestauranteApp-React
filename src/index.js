import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Reservation from './Reservasiones';



ReactDOM.render(
  <React.StrictMode>
    <App2 />
    <App />
    <Reservation />
    <App3 />
  </React.StrictMode>,
  document.getElementById('root')
);
