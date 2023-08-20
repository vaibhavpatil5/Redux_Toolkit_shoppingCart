
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import CartPage from './components/CartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./style.css";


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/Cart" element={<CartPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
