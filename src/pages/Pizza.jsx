//importiamo useParams per andare ad estrapolare il parametro "ID" dall'url..menu/id
import { useParams } from "react-router-dom";
//importiamo anche useEffect che servirà a gestire la chiamata per il singolo prodotto tramite id
import { useEffect, useState } from "react";
//importiamo axios per gestire la chiamata al server
import axios from "axios";

import PizzaCard from "./pages-components/PizzaCard";
import { Link } from "react-router-dom";

export default function Pizza() {
  //tramite destrutturazione andiamo a prendere l'id grazie all'hook useParams
  const { id } = useParams();
  //inizializziamo una variabile di stato per contenere le informazioni del nostro prodotto
  const [pizza, setPizza] = useState({});

  //richiamiamo useEffect che ci indirizzerà alla pagina caratterizzata dal'id richiesto
  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/pizzas/${id}`).then((res) => {
      setPizza(res.data);
    });
  }, []);
  return (
    <div className="w-xl mx-auto">
      <PizzaCard currentPizza={pizza} />
    </div>
  );
}
