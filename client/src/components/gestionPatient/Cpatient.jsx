import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function Cpatient(props) {
  const initialState = {
    NomPatient: "",
    Adresse: "",
    Tel: "",
    DateNaissance: "",
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
    <div className="" style={{ maxWidth: "800px" }}>
      <h1>Création d'un patient</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom patient</label>
          <input
            name="NomPatient"
            type="text"
            required
            value={crud.NomPatient}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date de naissance</label>
          <input
            name="DateNaissance"
            type="date"
            required
            value={crud.DateNaissance}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Tel</label>
          <input
            name="Tel"
            type="text"
            required
            value={crud.Tel}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Adresse</label>
          <input
            name="Adresse"
            type="text"
            required
            value={crud.Adresse}
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

export default Cpatient;
