import React from 'react';
 export default function Home(props){
    console.warn("Home",props)
    return(
        <div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://www.designinfo.in/wp-content/uploads/2023/12/Apple-iPhone-15-Pro-Max-256GB-Natural-Titanium-1-optimized.webp'></img>
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button   onClick={
                        ()=>{props.addCartToHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add to Cart</button>
                        <br>
                        </br>
                        <br></br>
                        <button   onClick={
                        ()=>{props.removeCartToHandler()}
                        }>
                        Remove to Cart</button>
                </div>
            </div>
        </div>
    )
 }