import './categories.styles.scss';
import categories from './data/categories.json';

const App = () => {

  return  <div className="categories-container">
      {categories.map(({title, id, imageUrl}) => {
      return (<div className="category-container" key={id}>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>)  
      })}
    </div>
  
}

export default App;
