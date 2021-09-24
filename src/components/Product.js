import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../Context';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        // this.props.product (PRODUCT) itu berasal dari inisialisai ProductList.js klo di php ROWS dan ROW
        // const {id,title,img,price,inCart} = this.props.product; || SEPERTI $row['img'] || jadi semua data yg ada pada "product" dimasukan kedalam "id,title,img,price,inCart" sesuai fild yg ada didalam array data.js
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <div className="product col-10 mx-auto col-md-6 col-lg-3 my-3">
                <ProductConsumer>
                    {value => (
                        // mengirim id
                        <div className="card" onClick={()=>{value.handleDetail(id)}}>
                            <Link to="/details">
                                <div className="card-image rounded">
                                    <img src={img} alt="product" className="card-img-top p-5" />
                                </div>
                            </Link>
                            {/* BODY CARD */}
                            <div className="card-body">
                                <h5 className="card-title title">{title}</h5>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text price">Rp. {price}</p>
                                    <i className="fas fa-shipping-fast fa-2x text-lightgreen"></i>
                                </div>
                            </div>
                            {/* BUTTON ADD TO CART */}
                            {/* shorthand IF {inCart ? true : false} jika barang ada di cart maka true akan di disable dan tidak bisa tambah keranjang */}
                            <button className="btn cart-btn" disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                            >
                            {/* Kondisi if ELSE*/}
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>{""}In Cart</p>
                            ):(
                                <span><i className="fas fa-plus-circle me-1 plus-icon"></i> Add To Cart</span>
                            )}
                            </button>
                        </div>
                    )}
                </ProductConsumer>
            </div>
        );
    }
}

export default Product;

// PropTypes berfungsi memfilter tipe data dari tiap2 data props atau variabel yang masuk
Product.propTypes = {
    product : PropTypes.shape({
        id : PropTypes.number,
        img : PropTypes.string,
        title : PropTypes.string,
        price : PropTypes.number,
        inCart : PropTypes.bool,
    }).isRequired
};
// const 