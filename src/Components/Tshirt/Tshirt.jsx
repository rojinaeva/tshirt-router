import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    const {picture,price,name}=props.tshirt;
    const handleAddToCart=props.handleAddToCart;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price : ${price}</p>
            <button onClick={()=>handleAddToCart(props.tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;