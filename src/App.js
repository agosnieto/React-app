import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {

  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
        <ItemListContainer></ItemListContainer>
        <ItemDetailContainer></ItemDetailContainer>
      </header>
    </div>
  );
}

export default App;
