import './product-card.styles.scss'
import Button from '../button/button.component'
import { CartContext } from '../../contexts/cart-context';
import {useContext} from 'react';


const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;
  const {addItemToCart} = useContext(CartContext)

  const addProductToCart = () => {
    addItemToCart(product)    
  }

  return (
    <div className='product-card-container'>
      <div className='product-img'>
        <img src={imageUrl} alt={`${name}`} />
        <Button label="add to cart" variant="inverted" onClick={addProductToCart}/>
      </div>
      <div className="product-description">
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  )
}
export default ProductCard