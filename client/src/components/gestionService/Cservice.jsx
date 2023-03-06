import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function Cservice(props) {
	const initialState = {
		NomService: "",
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
		<div className="" style={{ maxWidth: "600px" }}>
			<h1>Création d'un service</h1>
			<hr />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Nom du service</label>
					<input
						name="NomService"
						type="text"
						required
						value={crud.NomService}
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

export default Cservice;
