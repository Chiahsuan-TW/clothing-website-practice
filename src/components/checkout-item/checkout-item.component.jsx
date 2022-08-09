import './checkout-item.styles.scss';

const CheckoutItem = ({product, addItemToCart, removeItemFromCart, decreaseItemFromCart}) => {
  const {name, price, quantity, imageUrl} = product;
  

  const decreaseHandler = ()=> decreaseItemFromCart(product)
  const addHandler =()=> addItemToCart(product) 
  const removeHandler = () => removeItemFromCart(product)

  return (
      <tr className='product-item-container'>
        <td className='product-img'><img src={`${imageUrl}`} alt={name} /></td>
        <td><span className='product-name'>{name}</span></td>
        <td>
          <button onClick={decreaseHandler}>&lt;</button>
          <span className='product-qty'>{quantity}</span>
          <button onClick={addHandler}>&gt;</button>
        </td>
        <td><span className='product-price'>{price}</span></td>
        <td><button type="button" onClick={removeHandler}>X</button></td>
      </tr>
  )
}


export default CheckoutItem;