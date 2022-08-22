import {ItemImg, ItemDescription, ItemContainer} from './cart-item.styles'

const CartItem = ({cartItem}) => {
  const {name, quantity, price, imageUrl} = cartItem;

  return (
    <ItemContainer>
      <ItemImg>
        <img src={`${imageUrl}`} alt={name} />
      </ItemImg>
      <ItemDescription>
        <p>{name}</p>
        <span>{price}</span>
        <em>*</em>  <span>{quantity}</span>
      </ItemDescription>
    </ItemContainer>
  )
}

export default CartItem;