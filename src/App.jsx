import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path='/' element={<Navigate to="/products" replace />} />
          <Route path='/products' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
