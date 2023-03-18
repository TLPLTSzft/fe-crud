import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import { useState, useEffect } from "react";
import UrlapInput from "./UrlapInput";

function UjRekord(props) {
  const { onSuccess, modositandoId = 0, resetModositando } = props;
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (modositandoId === 0) {
      formReset();
    } else {
      fetch(`https://retoolapi.dev/V8jm7s/dogs/${modositandoId}`, {
        headers: {
          Accept: "application/json",
        },
      }).then(async Response => {
        const data = await Response.json();
        if (Response.status !== 200) {
          alert(Response.status + " - " + data.message);
        } else {
          setName(data.name);
          setBreed(data.breed);
          setAge(data.age);
          setVaccinated(data.vaccinated);
        }
      });
    }
  }, [modositandoId]);

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
        formReset();
      } else if (Response.status === 404) {
        setErrorMessage("404 - Az oldal nem található");
      } else {
        const jsonData = await Response.json();
        const errorMessage = jsonData.message;
        setErrorMessage(errorMessage);
      }
    });
  };

  const kutyaModositasa = () => {
    const kutya = {
      name: name,
      breed: breed,
      age: age,
      vaccinated: vaccinated,
    };
    fetch(`https://retoolapi.dev/V8jm7s/dogs/${modositandoId}`, {
      method: "PUT",
      body: JSON.stringify(kutya),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(async Response => {
      if (Response.status === 200) {
        onSuccess();
        resetModositando();
      } else if (Response.status === 404) {
        setErrorMessage("404 - Az oldal nem található");
      } else {
        const jsonData = await Response.json();
        const errorMessage = jsonData.message;
        setErrorMessage(errorMessage);
      }
    });
  };

  const formReset = () => {
    setName("");
    setBreed("");
    setAge("");
    setVaccinated("");
    setErrorMessage("");
  }

  return (<section className="py-5" id="ujRekord">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-xl-4">
          {
            modositandoId === 0 ?
              <h2>Új Rekord</h2> :
              <h2>{name} <h5>módosítása</h5></h2>
          }
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
              >
              </button>
            </div>
          ) : (
            ""
          )}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (modositandoId === 0) {
                kutyaFelvetele();
              } else {
                kutyaModositasa();
              }
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
              // inputType={Number}
              value={age}
              setValue={setAge}
            />
            <UrlapInput
              inputId={"vaccinatedInput"}
              inputLabel={"Vaccinated"}
              // inputType={toBeChecked}
              value={vaccinated}
              setValue={setVaccinated}
            />
            <div className="row row-cols-sm-2 pt-3">
              <div className="row-cols-1 px-2.5">
                {modositandoId === 0 ?
                  <button
                    className="btn btn-outline-success"
                    type="submit">
                    Felvétel
                  </button>
                  :
                  <button
                    className="btn btn-outline-warning"
                    type="submit">
                    Módosítás
                  </button>
                }
              </div>
              <div className="row-cols-1 px-2.5">
                <button
                  className="btn btn-outline-danger"
                  type="reset"
                  onClick={() => {
                    formReset();
                    resetModositando();
                  }}>
                  Alaphelyzet
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  </section >
  );
}

export default UjRekord;