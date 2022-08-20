import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories-context";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import './category.styles.scss';

const Category = () => {
  const {category} = useParams();

  const categoriesMap = useContext(CategoriesContext)
  const products = categoriesMap[category]

  return(
    <div className="specific-category-container">
      { products &&
        products.map(product => <ProductCard key={product.id} product={product}/>)
      } 
    </div>
  ) 
}


export default Category;