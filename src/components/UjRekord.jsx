import { useState } from "react";
import UrlapInput from "./UrlapInput";

function UjRekord(props) {
  const { onSuccess } = props;
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const kutyaFelvetele = () => {
    const kutya = {
      name: name,
      breed: breed,
      age: age,
      vaccinated: vaccinated,
    };
    fetch("https://retoolapi.dev/V8jm7s/dogs", {
      method: "POST",
      body: JSON.stringify(kutya),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(async Response => {
      if (Response.status === 201) {
        onSuccess();
        setName("");
        setBreed("");
        setAge("");
        setVaccinated("");
        setErrorMessage("");
      } else if (Response.status === 404) {
        setErrorMessage("404 - Az oldal nem található");
      } else {
        const jsonData = await Response.json();
        const errorMessage = jsonData.message;
        setErrorMessage(errorMessage);
      }
    });
  };

  return (<section className="py-5" id="ujRekord">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-xl-4">
          <h2>Új Rekord</h2>
          {errorMessage !== "" ? (
            <div
              className="alert alert-warning alert-dismissible fade show" role="alert"
            >
              {errorMessage}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => setErrorMessage("")}
              >
              </button>
            </div>
          ) : (
            ""
          )}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              kutyaFelvetele();
            }}
          >
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
            <div className="row row-cols-sm-2 pt-3">
              <div className="row-cols-1 px-2.5">
                <button
                  className="btn btn-outline-success"
                  type="submit">
                  Elküld
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section >
  );
}

export default UjRekord;