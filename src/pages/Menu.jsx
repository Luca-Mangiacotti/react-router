import { useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  id: "",
  name: "",
  image: ``,
  ingredients: [""],
};

export default function Menu() {
  const [PizzasList, setPizzasList] = useState([]);

  const fetchPizzas = () => {
    axios.get("http://127.0.0.1:3001/pizzas").then(function (res) {
      setPizzasList(res.data);
      console.log(res.data);
    });
  };

  useEffect(fetchPizzas, []);

  return (
    <div>
      <h3>menu delle pizze</h3>
      <ul>
        {PizzasList.map((pizza) => (
          <div key={pizza.id}>
            <h3>{pizza.name}</h3>
            <img src={pizza.image} alt={pizza.name} />
            <p>{pizza.ingredients}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
