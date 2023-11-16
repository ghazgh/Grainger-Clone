import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import SignUp from './Pages/Singup';
import ALLProductCatogiries from './Pages/ALLProductCatogiries';
import EmptyCart from './Pages/EmptyCart';
import Help from './Pages/Help'
import MainCategories from './Pages/MainCategories';
import SubCategories from './Pages/SubCategories';
import LastCategori from './Pages/LastCategori';
import ProductDescription from './Pages/ProductDescription';
import ProductBuying from './Pages/ProductBuying';
import InsertUrl from './Pages/InsertUrl';
import UrlPage from './Pages/UrlPage';
function App() {
  return (
 <>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/SignUp' element={<SignUp/>}></Route>
  <Route path='/Register' element={<Home/>}></Route>
  <Route path='/CartPage' element={<EmptyCart/>}></Route>
  <Route path='/AllProductCategories' element={<ALLProductCatogiries/>}></Route>
  <Route path='/Help' element={<Help/>}></Route>
  <Route path='/Categories' element={<MainCategories/>}></Route>
  <Route path='/SubCategories' element={<SubCategories/>}></Route>
  <Route path='/LastCategori' element={<LastCategori/>}></Route>
  <Route path='/ProductDescription' element={<ProductDescription/>}></Route>
  <Route path='/ProductBuying' element={<ProductBuying/>}></Route>
  <Route path='/InsertUrl'element={<InsertUrl/>}></Route>
  <Route path='/UrlPage' element={<UrlPage/>}></Route>=
 </Routes>
 </>
  );
}

export default App;
