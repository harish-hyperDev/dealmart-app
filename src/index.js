import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './navbar';
import BackgroundImageComponent from './coursel';
import reportWebVitals from './reportWebVitals';
import Items from './items';
import Deals from './deals';
import Savings from'./savings';
import Benefits from './benefits';
import Video from './video';
import Company from './company';
import Users from './users';
import Customers from './customers';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <BackgroundImageComponent/>
     <Items />
     <Deals/>
     <Savings />
     <Benefits/>
     <Video/>
     <Users/>
     <Customers/>
     <Company />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
