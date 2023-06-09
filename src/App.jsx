import Nav from "./components/Nav";
import Listazas from "./components/Listazas";
import UjRekord from "./components/UjRekord";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";

function App() {
  const [kutyak, setKutyak] = useState([]);
  const [modositandoId, setModositandoId] = useState(0);
  const kutyakListazasa = () => {
    fetch("https://retoolapi.dev/V8jm7s/dogs", {
      headers: {
        Accept: "application/json",
      },
    }).then(async Response => {
      const data = await Response.json();
      if (Response.status === 200) {
        setKutyak(data);
      } else if (Response.status === "404") {
        // todo 404 hiba
      } else {
        // egyeb hiba kezelese
        console.log(data.message);
      }
    });
  };

  return (
    <>
      <main className="container">
        <Nav navItems={[
          { href: "#ujRekord", target: "", displayText: "Új Rekord" },
          { href: "https://github.com/TLPLTSzft/fe-crud", target: "_blank", displayText: "GitHub" }
        ]} />
        <Listazas onMount={kutyakListazasa} kutyak={kutyak} modositClick={(id) => setModositandoId(id)} />
        <UjRekord onSuccess={kutyakListazasa} modositandoId={modositandoId} resetModositando={() => setModositandoId(0)} />
      </main>
    </>
  );
}

export default App;
