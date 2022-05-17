import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {CartContextProvider}  from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';

 function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}></Route>
                    <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
                    <Route path='/' element={<ItemCount></ItemCount>}></Route>
                    <Route path='/cart' element={<Cart></Cart>}></Route>
                    <Route path='/ItemDetailContainer' element={<ItemListContainer/>}></Route>
                    <Route path='/form' element={<Form></Form>}></Route>
                </Routes>
        </BrowserRouter>
      </CartContextProvider>
  
    </div>
  );
}

export default App;
