import { useState } from "react";
import UrlapInput from "./UrlapInput";

function UjRekord() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [vaccinated, setVaccinated] = useState("");

  return (<section className="py-5" id="ujRekord">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Új Rekord</h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <UrlapInput
              inputId={"nameInput"}
              inputLabel={"Name"}
              value={name}
              setValue={setName}
            />
            <UrlapInput
              inputId={"breedInput"}
              inputLabel={"Breed"}
              value={breed}
              setValue={setBreed}
            />
            <UrlapInput
              inputId={"ageInput"}
              inputLabel={"Age"}
              inputType={"Number"}
              value={age}
              setValue={setAge}
            />
            <UrlapInput
              inputId={"vaccinatedInput"}
              inputLabel={"Vaccinated"}
              value={vaccinated}
              setValue={setVaccinated}
            />
          </form>
          <div className="row row-cols-sm-2 pt-3">
            <div className="row-cols-1 px-2.5">
              <button
                className="btn btn-outline-success"
                type="submit">
                Elküld
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section >
  );
}

export default UjRekord;