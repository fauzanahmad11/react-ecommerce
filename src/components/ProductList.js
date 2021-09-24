import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
const title = 'Home';
class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                
            <Helmet>
                <title>Home</title>
            </Helmet>
                {/* Carousel */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item ">
                            <img src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" className="d-block w-100" alt="poster"/>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1606293459209-958d5c67c84b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" className="d-block w-100" alt="poster"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1610664921890-ebad05086414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="poster"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Carousel */}
                <div className="py-5">
                    <div className="container">
                        {/* function Title diolah di components/Title.js */}
                        <Title name="our" title="products"/>
                        <div className="row justify-content-center products-container">

                            {/* <ProductConsumer> mengambil/menjalankan data dari Context.js */}
                            <ProductConsumer>
                                {/* =>{} itu shorthand function jangan katro deh */}
                                {value => {
                                    // map adalah looping function, sedangkan product adalah inisialisasi dari products yg dikirim kan dari Context.js
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            // <div>
            //     <Product/>
            // </div>
        );
    }
}

export default ProductList;