import { useState } from "react";
import "./App.css";

// 4 = custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    // 5 - Refatorando POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  // 9 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Oi</h1>

      <h1>Lista de Produtos</h1>
      {/* 6 - Loading */}
      {loading && <p>Carregando dados..</p>}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              {/* 9 - desafio */}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="text"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no post */}
          {loading ? <p>Aguarde!</p> : <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
