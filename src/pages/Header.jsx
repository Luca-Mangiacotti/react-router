import HeaderNav from "./pages-components/HeaderNav";

export default function Header() {
  return (
    <header className="bg-purple-600 p-6 shadow-xl">
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <div className="px-0.5">
          <img className="w-35" src="../../../images/logo.png" alt="" />
        </div>
        <HeaderNav />
      </div>
    </header>
  );
}
