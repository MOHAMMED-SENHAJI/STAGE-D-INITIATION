import React, { useState, useEffect } from "react";
import "../../stylesh.css";
import { Link } from "react-router-dom";

function Rpatient() {
  const [cruds, setCruds] = useState([]);

  useEffect(function () {
    async function getInformation() {
      const response = await fetch(`http://localhost:8080/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const cru = await response.json();
      setCruds(cru);
    }

    getInformation();

    return;
  }, []);

  return (
    <div className="contain-read">
        <h2>Liste des patients</h2>
      <div className="table-responsive">
        <table className="table riped  table-hover table-bordered">
          <thead>
            <tr>
              <th>IP</th>
              <th>NOM</th>
              <th>Tel</th>
              <th>Date naissance</th>
              <th>Modification</th>
              <th>Suppression</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mohammed</td>
              <td>moussaoui</td>
              <td>6</td>
              <td>8</td>
              <td>
                <div
                  className="btn btn-success"
                >
                </div>
              </td>
              <td>
                <div
                  className="btn btn-danger"
                >
                </div>
              </td>
            </tr>
            <tr>
              <td>mohammed</td>
              <td>moussaoui</td>
              <td>6</td>
              <td>8</td>
              <td>
                <div
                  className="btn btn-success"
                >
                </div>
              </td>
              <td>
                <div
                  className="btn btn-danger"
                >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
        <p>
          <Link
            to = "/creerPatient"
            className="btn btn-primary float-right"
          >
            Créer un patient
          </Link>
        </p>
    </div>
  );
}

export default Rpatient;
