import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import CartContextProvide from './components/Context/CartContext';


 function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvide>
          <NavBar/>
              <Routes>
                  <Route path='/' element={<ItemListContainer/>}></Route>
                  <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
                  <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
                  <Route path='/' element={<ItemCount></ItemCount>}></Route>
              </Routes>
        </CartContextProvide>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
