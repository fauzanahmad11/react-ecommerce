import React, { Component } from 'react';
import Title from './Title';
import CartColumn from './CartColumn';
import CartList from './CartList';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../Context'; //untuk mengeluarkan data2 yang dikirimkan ke cart

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        // cek ada berapa banyak data yang ada didalam cart
                        // disini juga berfungsi apa bila cart kosong maka yang tampil adalah EmptyCart.js kalo ada yg tampil yah acartColum dong pun ah
                        // return() ini seperti menampilkan alias dia cuma calback data yang siap ditampilkan di App.js
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="cart"></Title>
                                    <CartColumn/>
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                                </React.Fragment>
                            );
                        }else{
                            return(
                                <EmptyCart/>
                            );
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;