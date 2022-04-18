import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'



 function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/list' element={<ItemListContainer/>}></Route>
            <Route path='/detail' element={<ItemDetailContainer/>}></Route>
          </Routes>

      </BrowserRouter>
  
    </div>
  );
}

export default App;
