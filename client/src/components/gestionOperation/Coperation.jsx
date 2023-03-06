import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function Coperation(props) {
  const optio = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
  ];
  const initialState = {
    IDmedecin: "",
    IPpatient: "",
    DateDebut: "",
    DateFin: "",
    CompteRendu: "",
  };
  const [crud, setCrud] = useState(initialState);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    async function postCrud() {
      try {
        const response = await post("/api/cruds/", crud);
        navigate(`/cruds/${response.data._id}`);
      } catch (error) {
        console.log("error", error);
      }
    }
    postCrud();
  }

  function handleChange(event) {
    setCrud({ ...crud, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <div className="" style={{ maxWidth: "700px" }}>
      <h1>Création d'une opération</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID-medecin</label>
          <Select options={optio} />
        </div>
        <div className="form-group">
          <label>IP-patient</label>
          <Select options={optio} />
        </div>
        <div className="form-group">
          <label>Date debut</label>
          <input
            name="DateDebut"
            type="datetime-local"
            required
            value={crud.DateDebut}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date fin</label>
          <input
            name="DateFin"
            type="datetime-local"
            required
            value={crud.DateFin}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Compte Rendu</label>
          <textarea
            name="CompteRendu"
            row="10"
            value={crud.CompteRendu}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="btn-group">
          <input type="submit" value="Créer" className="btn btn-primary" />
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}

export default Coperation;
