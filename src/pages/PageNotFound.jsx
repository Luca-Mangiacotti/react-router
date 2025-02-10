import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="container max-w-5xl mx-auto p-7 text-center">
      <h1>ERRORE!</h1>
      <h2>PAGINA NON TROVATA :/</h2>
      <div>
        <Link to={`/menu/`}>TORNA AL MENU</Link>
      </div>
      <div>
        <Link to={`/`}>TORNA ALLA HOME</Link>
      </div>
    </div>
  );
}
