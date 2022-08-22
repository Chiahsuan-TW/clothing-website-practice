import {AddToCartButton, ProductImg, ProductDescription} from './product-card.styles'
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
      <ProductImg>
        <img src={imageUrl} alt={`${name}`} />
        <AddToCartButton label="add to cart" variant="inverted" onClick={addProductToCart}/>
      </ProductImg>
      <ProductDescription>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </ProductDescription>
    </div>
  )
}
export default ProductCard