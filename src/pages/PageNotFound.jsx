import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="container max-w-5xl mx-auto p-7 text-center items-center">
      <h1>ERRORE!</h1>
      <h2>
        <s>PIZZA</s> PAGINA NON TROVATA
      </h2>
      <img
        className="mx-auto"
        src="../../images/pizzanotfound.png"
        alt="not found"
      />
      <div>
        <Link to={`/menu/`}>TORNA AL MENU</Link>
      </div>
      <div>
        <Link to={`/`}>TORNA ALLA HOME</Link>
      </div>
    </div>
  );
}
