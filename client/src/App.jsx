import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "./components/pages/Home";
import Cmedecin from "./components/gestionMedecin/Cmedecin";
import Cpatient from "./components/gestionPatient/Cpatient";
import Coperation from "./components/gestionOperation/Coperation";
import Cservice from "./components/gestionService/Cservice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<h1>Test</h1>} />
        <Route path="/creerMedcin" element= {<Cmedecin />} />
        <Route path="/creerPatient" element= {<Cpatient />} />
        <Route path="/creerOperation" element= {<Coperation />} />
        <Route path="/creerService" element= {<Cservice />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
