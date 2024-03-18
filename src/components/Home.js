import React from 'react';
 export default function Home(){
    return(
        <div>
            <div className='add-to-cart'>
                    <img src='https://media.istockphoto.com/id/1201806395/vector/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-concept-shopping-cart.jpg?s=612x612&w=0&k=20&c=KmXx8oRPoNgNzwhxu3zCsacUF-HSVMtpvGEi3hBbe2w='></img>
                </div>
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
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
 }