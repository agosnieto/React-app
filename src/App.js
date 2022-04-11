import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import DetailProduct from './components/ItemDetailContainer/ItemDetail';

function App() {

  return (
    <div className="App">
      <header className="App-header nav">
      <h1 class='title'>STAR 3D</h1>
      <h3>Impresiones 3D</h3>
      <NavBar></NavBar>
      <DetailProduct></DetailProduct>
      </header>
    </div>
  );
}

export default App;
