import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Layout from './components/Layout';
import ProductsPage from './pages/Products';
import NotFound from './components/ui/NotFound';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to="/products" replace />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='*' element={<NotFound message='404 Not Found' variant='page'/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
