import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {

  const n = 15
  const [name] = useState("Matheus");
  const redTitle = false;

  return (
    <>
      <div className="App">
        {/* CSS Global */}
        <h1>Rect com CSS</h1>
        {/* CSS de component */}
        <MyComponent />
        <p>Este paragráfo é do App.jsx</p>
        {/* Inline CSS */}
        <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
          Este elemento foi estilizado de forma inline
        </p>
        {/* Inline CSS dinâmico */}
        <h2 style={n < 10 ? ({color: "purple"}):({color:"pink"})}>
          CSS dinâmico 
        </h2>
        <h2 style={n > 10 ? ({color: "purple"}):({color:"pink"})}>
          CSS dinâmico 
        </h2>
        <h2 style={
          name === "Matheus"
            ? { color: "green", backgroundColor: "#000"}
            : null
        }
        >
          Teste nome
        </h2>
        {/* Classe dinâmica */}
        <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
        {/* CSS Modules */}
        <Title />
        <h2 className='Titlemy_title'>Testando</h2>


      </div>

    </>
  )
}

export default App
