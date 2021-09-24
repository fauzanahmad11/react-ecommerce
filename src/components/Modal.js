import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    } else{
                        return(
                            <ModalContainer>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div id="modal" className="col-8 col-md-6 col-lg-4  text-center text-capitalize p-2">
                                            <h5>Item Added to the cart</h5>

                                            <img src={img} className="img-fluid" alt="product" />
                                            <h5>{title}</h5>
                                            <h5 className="text-blue">Rp. {price}</h5>
                                            
                                            <Link to="/">
                                                <button className="btn btn-secondary me-1" onClick={()=> closeModal()}>
                                                    Continue Shopping
                                                </button>
                                            </Link>
                                            <Link to="/cart">
                                                <button className="btn text-yellow" cart onClick={()=> closeModal()}>
                                                    Go to cart
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;
const ModalContainer = styled.div`
    position : fixed;
    top : 0;
    left : 0 ;
    bottom : 0;
    right : 0;
    background : rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content : center;
    z-index:10;

    #modal {
        background : #f3f3f3;
    }
`;