import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Layout from './components/Layout';
import ProductsPage from './pages/Products';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to="/products" replace />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
