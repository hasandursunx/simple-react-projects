import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Breadcrumbs from './components/Breadcrambs';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>PREMIUM STORE</h1>
        <Breadcrumbs />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
