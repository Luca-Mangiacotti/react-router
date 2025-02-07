import { Link, NavLink } from "react-router-dom";
export default function HeaderNav() {
  return (
    <div>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/about-us">Info</NavLink>
    </div>
  );
}
