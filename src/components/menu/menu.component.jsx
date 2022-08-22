import CategoryItem from '../category-item/category-item.component';
import { CategoriesContainer } from './menu.styles';

const Menu = ({categories}) => {
  
  return  (<CategoriesContainer>
      {categories.map((category) => (<CategoryItem key={category.id} category={category} />))}
    </CategoriesContainer>)
}


export default Menu;