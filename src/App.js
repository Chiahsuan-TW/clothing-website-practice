import Home from '../src/routes/home/home.component';
import Navbar from '../src/routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import {Routes, Route} from 'react-router-dom';
import CategoriesPreview from './routes/categories-preview/categories-preview.component';
import Category from './routes/category/category.compoent';




const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navbar/>} >
      <Route index element={<Home/>} />
      <Route path='/shop' element={<Shop/>}>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category/>}/>
      </Route>
      <Route path='/auth' element={<Authentication/>} />
      <Route path='/checkout' element={<Checkout/>} />
    </Route>
  </Routes>)
}

export default App;
