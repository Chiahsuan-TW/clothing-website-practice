import {useContext} from 'react'
import { ProductContext } from '../../contexts/product-context'
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {
  const productList = useContext(ProductContext);

  return (
    // <ProductProvider>
      <div className='product-card-layout'>
        {productList.map((product) => (<ProductCard key={product.id} product={product}/>) )}
      </div>
    // </ProductProvider>
  )
}

export default Shop;