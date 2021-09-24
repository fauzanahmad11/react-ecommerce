// Import Semua Component disini Seperti gambar, halaman, plugin, dan lain-lain

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import Default from './components/Default';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      {/* Funsgi Tag Navbar untuk menampilkan navbar yang telah diimport diatas */}
      <Navbar/>
      {/* Fungsi Switch ini untuk memetakan jalur path/Route pada URL yg diakses user 
      path "/" berarti semuanya jadi semua halaman kalo pengecualian tambahkan "exact"
      */}
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/signin" component={SignIn} />
        <Route component={Default} />
      </Switch>
      <Modal/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
