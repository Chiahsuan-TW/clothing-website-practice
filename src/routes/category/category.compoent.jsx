import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories-context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {CategoryContainer} from './category.styles.jsx';

const Category = () => {
  const {category} = useParams();

  const categoriesMap = useContext(CategoriesContext)
  const products = categoriesMap[category]

  return(
    <CategoryContainer>
      { products &&
        products.map(product => <ProductCard key={product.id} product={product}/>)
      } 
    </CategoryContainer>
  ) 
}


export default Category;