import {ProductTable, ProductImg, DeleteButton} from './checkout-item.styles.jsx';

const CheckoutItem = ({product, addItemToCart, removeItemFromCart, decreaseItemFromCart}) => {
  const {name, price, quantity, imageUrl} = product;
  

  const decreaseHandler = ()=> decreaseItemFromCart(product)
  const addHandler =()=> addItemToCart(product) 
  const removeHandler = () => removeItemFromCart(product)

  return (
      <ProductTable>
        <ProductImg><img src={`${imageUrl}`} alt={name} /></ProductImg>
        <td><span className='product-name'>{name}</span></td>
        <td>
          <button onClick={decreaseHandler}>&lt;</button>
          <span className='product-qty'>{quantity}</span>
          <button onClick={addHandler}>&gt;</button>
        </td>
        <td><span className='product-price'>{price}</span></td>
        <td><DeleteButton type="button" onClick={removeHandler}>X</DeleteButton></td>
      </ProductTable>
  )
}


export default CheckoutItem;