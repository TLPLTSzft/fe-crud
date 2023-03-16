import { useState, useEffect } from "react";
import KutyaKartya from "./KutyaKartya";

function Listazas() {
  const kutyakListazasa = () => {
    fetch("https://retoolapi.dev/V8jm7s/dogs", {
      headers: {
        Accept: "application/json",
      },
    })
      // .then(Response => Response.json())
      // .then(jsonData => {
      //   console.log(jsonData);
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

  const [kutyak, setKutyak] = useState([]);
  useEffect(() => {
    kutyakListazasa();

  }, []);
  const cardList = [];
  kutyak.forEach(kutya => {
    cardList.push(
      <KutyaKartya key={kutyak.id} kutya={kutya} />);
  });
  return (<section>
    <h2>Kutyák listája</h2>
    <div className="row gy-4">
      {cardList}
    </div>
  </section>);
}

export default Listazas;