import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import { productData, productDataTwo } from './components/Products/data';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Products heading='Carros mais vendidos' data={productData} />
      <Feature />
      <Products heading='PM Especial' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
