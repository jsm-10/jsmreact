import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './pages/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Us from './pages/us'
import {CartContextProvider} from "./store/cartContext";



function App() {
  return (
    <div>
      <CartContextProvider>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/Us" element = {<Us />}/>
      <Route path="/Shop" element={<ItemListContainer />} />
      <Route path="/category/:categoryid" element={<ItemListContainer />} />
      <Route path="/product/:itemid" element={<ItemDetailContainer />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/OrdenFinalizada" element={<ordenFinalizada />} />
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
