import Nav from "./components/Nav";
import Listazas from "./components/Listazas";
import UjRekord from "./components/UjRekord";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <main className="container">
        <Nav navItems={[
          { href: "#ujRekord", target: "", displayText: "Új Rekord" },
          { href: "https://github.com/TLPLTSzft/fe-crud", target: "_blank", displayText: "GitHub" }
        ]} />
        <Listazas />
        <UjRekord />
      </main>
    </>
  );
}

export default App;
