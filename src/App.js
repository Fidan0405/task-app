import { useEffect, useState } from "react";
import axios from "axios"
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");


  const getPrducts = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    console.log(response.data.products);
    setData(response.data.products)
  }

  useEffect(() => {
    getPrducts();
  }, [])

  const filter = data.filter(el => el.brand.includes(input));

  return (
    <div className="app">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input
          value={input}
          onChange={event => setInput(event.target.value)}
          name="input"
        />
      </div>
      {
        input && filter.map(el => (
          <div>
            <p className="brand">{el.brand}</p>
            <p className="description">{el.price}</p>
            <p className="description">{el.rating}</p>
          </div>

        )
        )
      }
    </div>
  );
}

export default App;