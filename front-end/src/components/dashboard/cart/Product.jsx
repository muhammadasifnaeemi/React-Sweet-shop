import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Dashboard.css'
import { CartItem } from './CartItem'
function Product() {

    var data = [
        {
            id: "0",
            title: "Chocolate",
            imgUrl: "http://images.sweetauthoring.com/product/85634.png",
            price: "500"
        },
        {
            id: "1",
            title: "Cookies",
            imgUrl:"https://i.ndtvimg.com/i/2015-12/peanut-butter-cookies-625_625x350_51450435120.jpg",
            price: "500 kg"
        },
        {
            id: "2",
            title: "Mix Mithai",
            imgUrl: "https://c.ndtvimg.com/2019-10/o52ta3a8_sweets-_625x300_26_October_19.jpg",
            price: "800 kg"
        },
        {
            id: "2",
            title: "Mix Mithai",
            imgUrl: "https://c.ndtvimg.com/2019-10/o52ta3a8_sweets-_625x300_26_October_19.jpg",
            price: "800 kg"
        },
        {
            id: "2",
            title: "Mix Mithai",
            imgUrl: "https://c.ndtvimg.com/2019-10/o52ta3a8_sweets-_625x300_26_October_19.jpg",
            price: "800 kg"
        },
        {
            id: "2",
            title: "Mix Mithai",
            imgUrl: "https://c.ndtvimg.com/2019-10/o52ta3a8_sweets-_625x300_26_October_19.jpg",
            price: "800 kg"
        }
    ]

    return (
        <div>
            <div className='row'>
                {
                    data.map(item => {
                        return (
                            <div className='col-md-3 cart ml-5 mr-4' key={item.id}>
                                <CartItem title={item.title} price={item.price}
                                    imgUrl={item.imgUrl} key={item.id} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product