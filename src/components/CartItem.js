import React from 'react';

export default function CartItem({item, value}) {
    // deklarasi variabel untuk mengeluarkan data yang di kirim dari CartList.js
    const {id, title, img, price, total, count} = item;
    // deklarasi variabel untuk mengeluarkan dara yang di kirim dari Context.js
    const {increase, decrease, removeItem} = value;
    return (
        <div className="row justify-content-center my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img 
                    src={img}
                    // cara buat style inline
                    style={{width:"5rem", height:"5rem"}}
                    className="img-fluid"
                    alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        {/* onClick={()=>decrease(id)} jika tombol di klik akan menjalankan fungsi decrease */}
                        <span className="btn btn-black mx-1" onClick={()=>decrease(id)}> <i className="fas fa-minus"></i> </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=>increase(id)}><i className="fas fa-plus"></i></span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="text-danger"  onClick={()=>removeItem(id)}>
                    <div className="fas fa-trash"></div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong className="d-lg-none">item total : {total}</strong><strong>Rp. {total}</strong>
            </div>

        </div>
    );
}