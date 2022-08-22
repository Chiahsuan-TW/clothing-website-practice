import {CategoryPreviewContainer, Title, Preview} from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';
import { useNavigate } from 'react-router-dom';


//only show 4 items in the specific category
const CategoryPreview = ({title, products}) => {
  const navigate = useNavigate()

  const goToCategory = () => {
    navigate(`${title}`)
  }

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title onClick={goToCategory}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {
          products.filter((_, index) => index < 4 )
                  .map(item => (<ProductCard key={item.id} product={item} />))
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview