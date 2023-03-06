import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../stylesh.css";
function Rmedecin() {
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
        <h2>Liste des medecins</h2>
        <hr />
      </div>
      <div className="table-responsive">
        <table className="table riped  table-hover table-bordered">
          <thead>
            <tr>
              <th>ID-Medecin</th>
              <th>NOM</th>
              <th>SERVICE</th>
              <th>modification</th>
              <th>suppression</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>moussaoui</td>
              <td>brain</td>
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
              <td>2</td>
              <td>sara</td>
              <td>coeur</td>
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
              <td>3</td>
              <td>senhaji</td>
              <td>coeur</td>
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
            to = "/creerMedcin"
            className="btn btn-primary float-right"
          >
            Créer un medecin
          </Link>
        </p>
    </div>
  );
}

export default Rmedecin;
