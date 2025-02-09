import Logo from "./pages-components/Logo";

export default function Footer() {
  return (
    <footer className="bg-purple-600 p-6 shadow-xl">
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <h1> questo è il Footer</h1>
        <Logo />
      </div>
    </footer>
  );
}
