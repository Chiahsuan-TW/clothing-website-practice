import {CheckoutListContainer, CheckoutTable, CheckoutTotal} from './checkout.styles.jsx'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart, decreaseItemFromCart, total } = useContext(CartContext)


  return (
    <CheckoutListContainer>
      <CheckoutTable>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => <CheckoutItem key={item.id} product={item} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} decreaseItemFromCart={decreaseItemFromCart}/> )}
        </tbody>
      </CheckoutTable>
      <CheckoutTotal>Total : $ {total}</CheckoutTotal>
    </CheckoutListContainer>
  )
}


export default Checkout;