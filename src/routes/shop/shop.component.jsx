import {useContext, Fragment} from 'react'
import { CategoriesContext } from '../../contexts/categories-context'
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {
  const categoriesMap = useContext(CategoriesContext);
  const categoryList = Object.keys(categoriesMap)

  return (
    <Fragment>
      {categoryList.map(category => (<Fragment key={category}>
        <h2>{category}</h2>
        <div className='product-card-layout'>
        {categoriesMap[category].map((product) => (<ProductCard key={product.id} product={product}/>) )}
        </div> 
      </Fragment>))}
    </Fragment>
  )
}

export default Shop;