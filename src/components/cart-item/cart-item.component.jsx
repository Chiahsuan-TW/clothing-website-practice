import './cart-item.styles.scss'

const CartItem = ({cartItem}) => {
  const {name, quantity, price, imageUrl} = cartItem;

  return (
    <div className="item-container">
      <div className="item-img">
        <img src={`${imageUrl}`} alt={name} />
      </div>
      <div className="item-description">
        <p>{name}</p>
        <span>{price}</span>
        <em>*</em>  <span>{quantity}</span>
      </div>
    </div>
  )
}

export default CartItem;