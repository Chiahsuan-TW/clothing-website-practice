import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';
import { useNavigate } from 'react-router-dom';


//only show 4 items in the specific category
const CategoryPreview = ({title, products}) => {
  const navigate = useNavigate()

  const goToCategory = () => {
    navigate(`${title}`)
  }

  return (
    <div className='category-preview-container'>
      <h2>
        <span onClick={goToCategory} className='title'>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {
          products.filter((_, index) => index < 4 )
                  .map(item => (<ProductCard key={item.id} product={item} />))
        }
      </div>
    </div>
  )
}

export default CategoryPreview