
import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories-context'
import CategoryPreview from '../../components/category-preview/category-preview.component';

// import './shop.styles.scss';

const CategoriesPreview = () => {
  const categoriesMap = useContext(CategoriesContext);
  const categoryList = Object.keys(categoriesMap)

  return (
    <div className='product-card-layout'>
      {categoryList.map(category => {
        const products = categoriesMap[category]

        return <CategoryPreview key={category} title={category} products={products} />
      })}    
    </div>
  )
}

export default CategoriesPreview;