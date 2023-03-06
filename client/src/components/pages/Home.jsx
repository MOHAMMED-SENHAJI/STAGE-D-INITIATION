import React, { useState } from "react";

import Navbar from "../common/Navbar";

import Rservice from "../gestionService/Rservice";
// import Cservice from "../gestionService/Cservice";
import Roperation from "../gestionOperation/Roperation";
// import Coperation from "../gestionOperation/Coperation";
import Rmedecin from "../gestionMedecin/Rmedecin";
// import Cmedecin from "../gestionMedecin/Cmedecin";
import Rpatient from "../gestionPatient/Rpatient";
// import Cpatient from "./components/gestionPatient/Cpatient";
// import CrudDetails from "./components/cruds/CrudDetails";
// import CrudEdit from "./components/cruds/CrudEdit";
// import CrudDelete from "./components/cruds/CrudDelete";
import "./Home.css";


function Home() {
    const [active, setActive] = useState("");
    return (
    <div className="App">
        <Navbar setActive={setActive}/>
        <div>
        {active === "Medecin" && <Rmedecin />}
        {active === "Operation" && <Roperation />}
        {active === "Service" && <Rservice /> }
        {active === "Patient" && <Rpatient />}
        </div>  
    </div>
    );
}

export default Home;
