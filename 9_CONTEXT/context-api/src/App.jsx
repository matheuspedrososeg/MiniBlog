import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Context</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Product />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
    <Home />


    </>
  )
}

export default App
