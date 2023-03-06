import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function Cmedecin(props) {
	const optio = [
		{ label: "coeur", value: 1},
		{ label: "brain", value: 2},
		{ label: "pharmacie", value: 3},
		{ label: "cardio", value: 4},
	];
  const initialState = {
    NomMedecin: "",
    Service: "",
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
      <h1>Création d'un medecin</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom medecin</label>
          <input
            name="NomMedecin"
            type="text"
            required
            value={crud.NomMedecin}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Service</label>
			<Select options={optio} />
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

export default Cmedecin;
