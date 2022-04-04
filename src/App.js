import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header nav">
      <h1 class='title'>STAR 3D</h1>
      <h3>Impresiones 3D</h3>
      <NavBar></NavBar>
      <ItemListContainer greeting="Productos destacados del mes"></ItemListContainer>
      </header>
    </div>
  );
}

export default App;
