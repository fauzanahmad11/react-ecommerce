import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';

const ProductContext = React.createContext();

// logikanya semua data Data.js ditangkap dan masukan kedalam state dan dilempar ke ProductList.JS
class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen : false,
        modalProduct : detailProduct,
        cartSubtotal : 0,
        cartTax : 0,
        cartTotal : 0
    }

    // componentDidMount berfungsi menjalankan component setelah content pada web berhasil dirender
    componentDidMount(){
        this.setProducts();
    }
    
    // memasukan data kedalam singleItem bedanya dengan yg distate. kalo yang ini data akan seola2 direfresh sehingga ketika di ada to cart bisa berubah menjadi incart
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {products:tempProducts}
        })
    }

    // mengambil id yang dikirim dari product
    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    } 
    // fungsi ketika handleDetail di klik
    handleDetail = id =>{
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product}
        })
    }
    // fungsi ketika handleCart di klik
    addToCart = id =>{
        let tempProducts = [...this.state.products];
        // index berfungsi untuk membedakan masing2 product
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index];
        // ketika tambah cart maka true dan count akan jadi 1
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return {product:tempProducts, cart:[...this.state.cart,product]}
        },
        () => {
            this.addTotals();
        }
        )
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            // ketika modal open modal produk berisi data produk modalProduct:product
            return {modalProduct:product, modalOpen:true}
        })
    }
    closeModal = id => {
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    increase = id => {
        let tempCart = [...this.state.cart];
        const selectProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectProduct);
        const product = tempCart[index];

        product.count = product.count + 1; //count disini adalah Quantity yang ada di data 
        product.total = product.count * product.price;

        this.setState(() => {
            return {cart:[...tempCart]}
        },()=>{
            // perbaharui total 
            this.addTotals();
        })
    }
    decrease = id => {
        let tempCart = [...this.state.cart];
        const selectProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectProduct);
        const product = tempCart[index];

        product.count = product.count - 1; //count disini adalah Quantity yang ada di data 
        // kasih kondisi kalo kurang dari 1 dan tetap di kurangi akan dihapus. kalo else maka di kalikan
        if(product.count === 0){
            this.removeItem(id);
        }else{
            product.total = product.count * product.price;

            this.setState(() => {
                return {cart:[...tempCart]}
            },()=>{
                // perbaharui total 
                this.addTotals();
            })
        }
    }
    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        
        // gunakan "filter" untuk mengambil barang berdasarkan idnya, pada tahap ini barang yang diambil adalah barang yg tidak dihapus makanya pake !==
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(() => {
            return {
                cart : [...tempCart],
                products : [...tempProducts]
            }
        },() => {
            this.addTotals(); //jalankan kembali total karna ada id yang kita hapus biar update datanya
        });
    }
    clearCart = () => {
        // kembalikan isi cart jadi array kosong
        this.setState(()=>{
            return {cart:[]};
        },()=> {
            // setProducts kembali kedefault kosong agar incartnya false atau kosong
            this.setProducts();
            // jalankan semua fungsi agar function mengidentifikasi ulang agar kosong lah pokoknya 
            this.addTotals();
        });
    }
    addTotals = () => {
        // hitung total
        let subtotal = 0;
        // keluar kan semua data yang ada di dalam cart untuk proses Hitung
        this.state.cart.map(item => (subtotal += item.total));
        const tempTax = subtotal*0.1; //10% = 0.1
        //toFixed untuk membulatkan angka (2 angka dibelakang ',')
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subtotal + tax;
        // masukan kedalam setState
        this.setState(() =>{
            // return untuk membuat function jadi callback
            return{
                cartSubtotal : subtotal,
                cartTax : tax,
                cartTotal : total
            };
        })
    }
    

    render() {
        return (
            // provider dibawah digunakan agar seluruh function yang dibuat dapat digunakan di class yg mengimportnya 
            // titik 3x digunakan untuk mengirimkan semua data yang ada dalam variable didalam state
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail:this.handleDetail, 
                addToCart:this.addToCart, 
                openModal:this.openModal, 
                closeModal:this.closeModal, 
                increase:this.increase, 
                decrease:this.decrease, 
                removeItem:this.removeItem, 
                clearCart:this.clearCart}}>

                    {this.props.children}
                    
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider};