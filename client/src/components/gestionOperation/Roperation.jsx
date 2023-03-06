import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../stylesh.css";
function Roperation() {
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
      <div>
        <h2>Liste des opérations</h2>
        <hr />
      </div>
      <div className="table-responsive">
        <table className="table riped  table-hover table-bordered">
          <thead>
            <tr>
              <th>ID-Operation</th>
              <th>ID-Medecin</th>
              <th>IP-Patient</th>
              <th>Date-debut</th>
              <th>Date-fin</th>
              <th>modification</th>
              <th>suppression</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mohammed</td>
              <td>moussaoui</td>
              <td>6</td>
              <td>8</td>
              <td>9</td>
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
            to = "/creerOperation"
            className="btn btn-primary float-right"
          >
            Créer une opération
          </Link>
        </p>
    </div>
  );
}

export default Roperation;
