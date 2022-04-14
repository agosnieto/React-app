import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import{Browser,Routes,Rout} from 'react-router-dom'



function App() {

  return (
    <div className="App">
      <header>
        <h1>Hello World</h1>
        <NavBar></NavBar>
        <ItemListContainer></ItemListContainer>
        <ItemDetailContainer></ItemDetailContainer>
      </header>
    </div>
  );
}

export default App;
