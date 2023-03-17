import Nav from "./components/Nav";
import Listazas from "./components/Listazas";
import UjRekord from "./components/UjRekord";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [kutyak, setKutyak] = useState([]);
  const kutyakListazasa = () => {
    fetch("https://retoolapi.dev/V8jm7s/dogs", {
      headers: {
        Accept: "application/json",
      },
    })
      .then(async Response => {
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
  }

  return (
    <>
      <main className="container">
        <Nav navItems={[
          { href: "#ujRekord", target: "", displayText: "Új Rekord" },
          { href: "https://github.com/TLPLTSzft/fe-crud", target: "_blank", displayText: "GitHub" }
        ]} />
        <Listazas onMount={kutyakListazasa} kutyak={kutyak} />
        <UjRekord onSuccess={kutyakListazasa} />
      </main>
    </>
  );
}

export default App;
