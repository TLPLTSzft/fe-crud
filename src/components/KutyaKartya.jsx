function KutyaKartya(props) {
  const { kutya, afterDelete, modositClick } = props;
  const { id, name, breed, age, vaccinated } = kutya;
  const kutyaTorlese = () => {
    fetch(`https://retoolapi.dev/V8jm7s/dogs/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    }).then(async Response => {
      if (Response.status !== 204) {
        const data = await Response.json();
        // alert(Response.status + " - " + data.message);
      }
      afterDelete();
    });
  };

  return (
    <div className="col-md-6 col-xl-4">
      <div className="card card h-100">
        <div className="card-header">
          <h4 className="card-title">{name}</h4>
        </div>
        <div className="card-body">
          <table className="table table-sm table-hover">
            <tbody>
              <tr>
                <th>Breed:</th>
                <td>{breed}</td>
              </tr>
              <tr>
                <th>Age:</th>
                <td>{age}</td>
              </tr>
              <tr>
                <th>Vaccinated:</th>
                <td>
                  {vaccinated ? "true" : "false"}
                </td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="card-footer">
          <div className="row row-cols-sm-2">
            <div className="row-cols-1 p-1">
              <a href="#ujRekord" className="btn btn-outline-warning" onClick={() => { modositClick(id) }}>Módosítás</a>
            </div>
            <div className="row-cols-1 p-1">
              <button className="btn btn-outline-danger" onClick={() => { kutyaTorlese(); }}>Törlés</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default KutyaKartya;