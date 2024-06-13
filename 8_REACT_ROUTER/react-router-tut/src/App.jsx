import './App.css'

// 1 - config react  router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

// components
import Navbar from './components/navbar/Navbar';
import Product from './pages/Product/Product';
import Info from './pages/Info/Info';
import NotFound from './pages/NotFound/NotFound';
import Search from './pages/Search/Search';
import SearchForm from './components/search/SearchForm';


function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
      {/* { 2 - links com React Router} */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - search */}
          <Route path='search' element={<Search />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" /> } />
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
