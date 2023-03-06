import React from "react";
import "./Navbar.css";


const Navbar = ({setActive}) => {

  return (
    <nav className="container">
          <div>
            <img src={require('./image/hopital.png')} alt="" />
          </div>
          <ul>
            <li className="li-container" onClick={() => setActive("Medecin")}>
                <div>
                  <img src={require('./image/doctor.png')} alt="" />
                  <div
                  className="NavLink"
                  >
                    Medecin
                  </div>
                </div>
              </li>
              <li className="li-container" onClick={() => setActive("Patient")}>
                <div>
                  <img src={require('./image/patient.png')} alt="" />
                  <div
                  className="NavLink"
                  >
                    Patient
                  </div>
                </div> 
              </li>
              <li className="li-container" onClick={() => setActive("Operation")}>
                <div>
                  <img src={require('./image/operation.jpg')} alt="" />
                  <div
                  className="NavLink"
                  >
                    Operations
                  </div>
                </div>
              </li>
              <li className="li-container" onClick={() => setActive("Service")}>
                <div>
                  <img src={require('./image/service.png')} alt="" />
                  <div
                  className="NavLink"
                  >
                    Services
                  </div>
                </div>
              </li>
              <li className="li-container">
                <div>
                  <img src={require('./image/logout.png')} alt="" />
                  <div
                  className="NavLink"
                  style={{}}
                  >
                    LogOut
                  </div>
                </div>
              </li>
          </ul>
    </nav>
  );
};

export default Navbar;
