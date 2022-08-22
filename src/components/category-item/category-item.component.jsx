import {CategoryContainer, Background, Body} from './category-item.styles.jsx';


const CategoryItem = ({category}) => {
  const {title, imageUrl} = category;
  
  return (<CategoryContainer>
    <Background imageUrl={imageUrl}/>
    <Body>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </Body>
  </CategoryContainer>)  
}

export default CategoryItem;