import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
         message=<p>add some products</p>
    }
    else{
        message=<div>thanks for add more products</div>
    }
    return (
        <div>
            <h3 className={cart.length === 1? "blue":"red" }>order summary : {cart.length}</h3>
            
            {
                cart.map(tshirt=><p
                key={tshirt._id}>{tshirt.name}
                <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            
        </div>
    );
};

export default Cart;


// CONDITINAL RENDERING:


// 1.use if or if else to set a variable that will contain Component,element:


// let message;
//     if(cart.length===0){
//          message=<p>add some products</p>
//     }
//     else{
//         message=<div>thanks for add more products</div>
//     }

//     use 
//     <p>{message}</p>
// 2.ternary operator: condition?"for true":"for false":

// {
//     (cart.length===0?'fokir':'borolok')
// }

// 3.logical &&:if the condition is true then the next thing will be displayed :

// {
//     (cart.length===2&&<div>double</div>)
// }
// 4.logical ||:if the condition is false then the next thing will be displayed :

// {
//     (cart.length===3||'tinta to hoilona')
// }



// CONDITIONAL CSS CLASS(STYLE)
// for jsx file::

// <h3 className={cart.length === 1? "blue":"red" }>order summary : {cart.length}</h3>


// for css file 
// .blue{
//     background-color: blue;
// }
// .orange{
//     background-color: orange;
// }
// .red{
//     background-color: red;
// }



// if common kichu likhte hoy r sathe condition hisebeo eke sathe likhte hoy :
// for jsx file

// <h2 className={`bold ${cart.length===3?'yellow':'purple'}`}>something</h2>



// for cssfile:

// .purple{
//     background-color: purple;
// }
// .yellow{
//     background-color: yellow;
// }
// .bold{
//     font-weight: bold;
// }