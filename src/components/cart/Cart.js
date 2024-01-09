import React from 'react'
import './Cart.scss'
import { useSelector } from 'react-redux'
import CartItem from '../cartItem/CartItem'
import { BsFillCartXFill } from "react-icons/bs";

function Cart({onClose}) {
  const cart = useSelector((state) => state.cartReducer.cartData)
  const isCartEmpty = cart.length === 0;
  let totalAmount = 0;
  cart.forEach(item => totalAmount += (item.quantity * item.price))


  function handleCheckout () {

  }

  return (
    <div className='cart'>
        <div className="overlay" onClick={onClose}></div>

        <div className="cart-content">
            <div className="header">
                <h3>shopping cart</h3>
                <div className="close-btn" onClick={onClose}>
                    close
                </div>
            </div>

            <div className="cart-items">
                {cart?.map((item) => <CartItem key={item.key} cart={item} />)}
            </div>


            {isCartEmpty &&
              <div className="empty-cart-info">
                <div className="icon">
                  <BsFillCartXFill />
                </div>
                <h3>cart is empty</h3>
              </div>
            }


            {!isCartEmpty &&
              <div className="checkout-info">
                <div className="total-amount">
                  <h3 className="total-message">Total:</h3>
                  <h3 className='total-value'>₹ {totalAmount}</h3>
                </div>
                <div className="checkout btn-primary" onClick={handleCheckout}>
                  Checkout now
                </div>
              </div>
            }
        </div>
    </div>
  )
}

export default Cart