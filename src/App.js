import categories from './data/categories.json';
import Menu from './components/menu/menu.component';

const App = () => {
return (<Menu categories={categories}/>)
}

export default App;
