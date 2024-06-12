import React from 'react'
import './MyComponent.css'; 

const MyComponent = () => {
  return (
    <div>
        <h1>CSS de componente!</h1>
        <p>Este é o paragrafo do meu component</p>
        <p className="my-comp-paragraph">Este também é do component</p>
    </div>
  )
}

export default MyComponent;