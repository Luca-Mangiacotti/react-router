import { Link, NavLink } from "react-router-dom";
export default function HeaderNav() {
  return (
    <div className="flex justify-between p-2.5 gap-1.5">
      <NavLink
        className="text-[#c9ae2a] border-4 border-[#c9ae2a] border-double p-1.5 rounded-xl"
        to="/"
      >
        Home Page
      </NavLink>
      <NavLink
        className="text-[#c9ae2a] border-4 border-[#c9ae2a] border-double p-1.5 rounded-xl"
        to="/menu"
      >
        Menu
      </NavLink>
      <NavLink
        className="text-[#c9ae2a] border-4 border-[#c9ae2a] border-double p-1.5 rounded-xl"
        to="/about-us"
      >
        Info
      </NavLink>
    </div>
  );
}
