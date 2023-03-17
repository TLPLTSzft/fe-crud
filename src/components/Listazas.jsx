import { useEffect } from "react";
import KutyaKartya from "./KutyaKartya";

function Listazas(props) {
  const { kutyak, onMount } = props
  useEffect(() => {
    onMount();
  }, []);
  const cardList = [];
  kutyak.forEach(kutya => {
    cardList.push(
      <KutyaKartya key={kutyak.id} kutya={kutya} />);
  });
  return (<section>
    <h2 className="pt-4 pb-2">Kutyák listája</h2>
    <div className="row gy-4">
      {cardList}
    </div>
  </section>);
}

export default Listazas;