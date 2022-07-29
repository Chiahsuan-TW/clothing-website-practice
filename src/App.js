import Home from '../src/routes/home/home.component';
import Navbar from '../src/routes/navigation/navigation.component';
import SignIn from '../src/routes/signIn/signIn.component';
import {Routes, Route} from 'react-router-dom';


const Shop = () => {
  return <h1>This is the shop page</h1>
}

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navbar/>} >
      <Route index element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/sign-in' element={<SignIn/>} />
    </Route>
  </Routes>)
}

export default App;
