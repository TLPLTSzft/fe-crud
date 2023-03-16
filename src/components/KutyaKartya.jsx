function KutyaKartya(props) {
  const { kutya } = props;
  const { name, breed, age, vaccinated } = kutya;
  // modositas es torles
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
                <td>{vaccinated}</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="card-footer">
          <div className="row row-cols-2">
            <div className="row-cols-1 px-1">
              <button className="btn btn-outline-warning">Módosítás</button>
            </div>
            <div className="row-cols-1 px-1">
              <button className="btn btn-outline-danger">Törlés</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default KutyaKartya;