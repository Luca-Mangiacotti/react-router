import { Link, NavLink } from "react-router-dom";
export default function HeaderNav() {
  return (
    <div className="flex justify-between p-2.5">
      <NavLink className="px-2" to="/">
        Home Page
      </NavLink>
      <NavLink className="px-2" to="/menu">
        Menu
      </NavLink>
      <NavLink className="px-2" to="/about-us">
        Info
      </NavLink>
    </div>
  );
}
