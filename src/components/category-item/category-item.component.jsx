import {CategoryContainer, Background, Body} from './category-item.styles.jsx';
import {useNavigate} from 'react-router-dom';

const CategoryItem = ({category}) => {
  const {title, imageUrl, route} = category;
  
  const navigate = useNavigate();
  const handleNavigate = () => navigate(route);

  return (<CategoryContainer onClick={handleNavigate}>
    <Background imageUrl={imageUrl}/>
    <Body>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </Body>
  </CategoryContainer>)  
}

export default CategoryItem;