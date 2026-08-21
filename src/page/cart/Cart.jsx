import  { useContext } from 'react'
import CartContext from '../../components/context/CartContext'
import './Cart.css'

import { FaRegTrashCan } from "react-icons/fa6";
import PageTransition from '../../components/PageTransition';

function Cart() {
    const{cartItems , increaseQunantity , decreaseQuantity ,removeFromCart} = useContext(CartContext)
    console.log(cartItems);

    const total = cartItems.reduce((acc , item ) => acc + item.price * item.quantity, 0)


  return (
    <PageTransition>
            <div className='checkout'>
        <div className='ordersummary'> 
            <h1>Order Summary</h1>

            <div className="itmes">
                {cartItems.length === 0 ? (
                    <p>Your Cart is empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div className="item_cart" key={index}>
                            <div className="image_name">

                                <div className='img_items'>
                                    <img src={item.images[0]} alt="image" />
                                </div>
                                

                               <div className="content">
                                <p className="cart-item-title">{item.title}</p>
                               
                                <p className='price_item'>${item.price}</p>

                                <div className="quantity_conteol">
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span className='quantity'>{item.quantity}</span>
                                    <button onClick={() => increaseQunantity(item.id)}>+</button>

                                </div>
                               </div>

                            
                            </div>
                               <button className='delete_item' 
                               onClick={() =>  removeFromCart(item.id)}>
                                <FaRegTrashCan />
                               </button>

                        </div>
                    ))
                )}

            </div>


         <div className="bitton_summary">
            <div className="shopt_able">
                <p>Total:</p>
                <span className='total_checkout'>${total}</span>
            </div>

            <div className="button_div">
                <button type='submit'>Place Order</button>
            </div>
         </div>
       
        </div>
    </div>
    </PageTransition>

  )
}

export default Cart
