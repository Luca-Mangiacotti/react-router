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
    <div className="container max-w-5xl mx-auto p-8">
      <h3 className="text-purple-600 ">menu delle pizze</h3>
      <ul className="grid grid-cols-3 gap-4">
        {PizzasList.map((pizza) => (
          <div
            key={pizza.id}
            className="border-4 border-purple-600 border-double p-1.5 rounded-xl overflow-hidden"
          >
            <h3>{pizza.name}</h3>
            <img className="aspect-video" src={pizza.image} alt={pizza.name} />
            <p>{pizza.ingredients}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
