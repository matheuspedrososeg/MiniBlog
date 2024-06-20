import "./App.css";

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Hooks
import { useAuth } from "./hooks/useAuth";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Page
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    return <>
    <p>Loading</p>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><radialGradient id='a8' cx='.66' fx='.66' cy='.3125' fy='.3125' gradientTransform='scale(1.5)'><stop offset='0' stop-color='#FF156D'></stop><stop offset='.3' stop-color='#FF156D' stop-opacity='.9'></stop><stop offset='.6' stop-color='#FF156D' stop-opacity='.6'></stop><stop offset='.8' stop-color='#FF156D' stop-opacity='.3'></stop><stop offset='1' stop-color='#FF156D' stop-opacity='0'></stop></radialGradient><circle transform-origin='center' fill='none' stroke='url(#a8)' stroke-width='15' stroke-linecap='round' stroke-dasharray='200 1000' stroke-dashoffset='0' cx='100' cy='100' r='70'><animateTransform type='rotate' attributeName='transform' calcMode='spline' dur='2' values='360;0' keyTimes='0;1' keySplines='0 0 1 1' repeatCount='indefinite'></animateTransform></circle><circle transform-origin='center' fill='none' opacity='.2' stroke='#FF156D' stroke-width='15' stroke-linecap='round' cx='100' cy='100' r='70'></circle></svg>
    </>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={!auth ? <Login /> : <Navigate to="/login" />}/>
            <Route path="/register" element={auth ? <Register /> :<Navigate to="/login" /> } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
