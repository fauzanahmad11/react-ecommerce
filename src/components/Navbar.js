import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../css/App.css';
import {ButtonContainer} from './Button';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-sm-5">
                <div className="container-fluid">
                    <Link to="/">
                        <img src={logo} alt="store" className="navbar-brand" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-navbar">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="link">
                                <div className="nav-link active">Products</div>
                            </Link>
                            <Link to="/signin
import {Link} from 'react-router-dom';" className="link">
                                <div className="nav-link">Sign In</div>
                            </Link>
                        </div>
                        <Link to="/cart">
{/* menggunakan plugin styled-components
buttonContainer adalah nama tag yang akan kita gunakan untuk menerapkan stylenya
stylenya dipisah dimasukkan kedalam folder Components berdasarkan nama componentsnya */}
                            <ButtonContainer className="cart-icon">
                                <i className="fas fa-cart-plus"></i>
                                <span className="d-md-none d-xs-block ms-2 title">My Shopping Cart</span>
                            </ButtonContainer>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
