import './App.css';
import Navbar from './components/Navbar';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div>
    <Navbar/>
    {/* <ItemListContainer /> */}
    <ItemDetailContainer />
    <h1 className='App'> SITIO EN CONSTRUCCION</h1>
    </div>
  );
}

export default App;
