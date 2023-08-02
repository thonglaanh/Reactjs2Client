import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import ListItem from './pages/ListItem';


const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/listItem" element={<ListItem />} />

          <Route path="/detail/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* Footer */}
      </div>
    </Router>
  );
};

export default App;
