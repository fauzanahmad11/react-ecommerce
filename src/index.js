import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; //import Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ProductProvider} from './Context';

ReactDOM.render(
  <React.StrictMode>
    {/* Tambahkan Pembungkus </ProductProvider> untuk mengalirkan seluruh data yg ada didalamnya keseluruh route yang ada filenya terdapat di Context.js */}
    <ProductProvider>
      {/* bungkus App kedalam Router untuk menjalankannya nih dong ah */}
      <Router>
        <App />
      </Router> 
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
