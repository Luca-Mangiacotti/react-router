import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function PizzaCard({ currentPizza }) {
  const { id } = useParams();

  return (
    <div
      key={currentPizza.id}
      className="border-4 border-purple-600 border-double p-1.5 rounded-xl overflow-hidden h-full"
    >
      <h3>&#127829; {currentPizza.name} &#x1F47D;</h3>
      <img
        className="aspect-video shadow-2xl"
        src={currentPizza.image}
        alt={currentPizza.name}
      />
      {currentPizza.ingredients && (
        <ul className="flex flex-wrap gap-1">
          {currentPizza.ingredients.map((elm) => (
            <li key={elm}>{elm}</li>
          ))}
        </ul>
      )}
      {id ? (
        <Link to={`/menu`}>
          <button>torna al menu</button>
        </Link>
      ) : (
        <Link to={`/menu/${currentPizza.id}`}>
          <button>visualizza pizza</button>
        </Link>
      )}
    </div>
  );
}
