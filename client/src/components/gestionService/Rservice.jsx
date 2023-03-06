import React, { useState, useEffect } from "react";
import "../../stylesh.css";

import { Link } from "react-router-dom";

function Rservice() {
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

//

  async function handleDelete() {
		try {
		} catch (error) {
			console.error(error);
		}
	}

//

  return (
    <div className="contain-read">
      <div>
        <h2>Liste des services</h2>
        <hr />
      </div>
      <div className="table-responsive">
        <table className="table riped  table-hover table-bordered">
          <thead>
            <tr>
              <th>Nom service</th>
              <th>Modification</th>
              <th>Supperession</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mohammed</td>
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
      <p>
        <Link
            to = "/creerService"
            className="btn btn-primary float-right"
          >
            Créer un service
        </Link>
      </p>
      
    </div>
  );
}

export default Rservice;
