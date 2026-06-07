import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Inicio from "./Inicio";
import Coleccion from "./Coleccion";
import Categorias from "./Categorias";

import imgTwinMill from "./Coches/Twin-Mill.jpg";
import imgBoneShaker from "./Coches/Bone-Shaker.jpg";
import imgBajaTruck from "./Coches/Baja-Truck.jpg";
import imgDriftKing from "./Coches/Drift-King.jpg";
import imgSpeedDemon from "./Coches/Speed-Demon.jpg";
import imgLogo from "./Coches/Logo.png";

const initialData = [
  {
    id: 1,
    name: "Classic Muscle",
    category: "Clásicos",
    year: 1969,
    img: imgTwinMill,
    obtained: true,
    fav: true,
  },
  {
    id: 2,
    name: "Bone Shaker Custom",
    category: "Muscle Cars",
    year: 2006,
    img: imgBoneShaker,
    obtained: false,
    fav: false,
  },
  {
    id: 3,
    name: "Baja Truck",
    category: "Todoterreno",
    year: 2012,
    img: imgBajaTruck,
    obtained: true,
    fav: false,
  },
  {
    id: 4,
    name: "Drift King",
    category: "Competición",
    year: 2020,
    img: imgDriftKing,
    obtained: false,
    fav: false,
  },
  {
    id: 5,
    name: "Speed Demon",
    category: "Deportivos",
    year: 2023,
    img: imgSpeedDemon,
    obtained: false,
    fav: false,
  },
];
export default function App() {
  const [vehicles, setVehicles] = useState(initialData);
  const [loading, setLoading] = useState(true);

  // Pantalla de carga
  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const toggleObtained = (id) => {
    setVehicles(
      vehicles.map((v) => (v.id === id ? { ...v, obtained: !v.obtained } : v))
    );
  };

  const toggleFav = (id) => {
    setVehicles(vehicles.map((v) => (v.id === id ? { ...v, fav: !v.fav } : v)));
  };

  if (loading) {
    return (
      <div className="loading-screen bg-cobalt text-yellow">
        <h1>
          <i className="fa-solid fa-car"></i>
        </h1>
        <h3>Cargando Garaje...</h3>
      </div>
    );
  }

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-cobalt mb-4">
        <div className="container">
          <Link
            className="navbar-brand fw-bold d-flex align-items-center"
            to="/"
            style={{ color: "Blue" }}
          >
            <img src={imgLogo} alt="Hot Wheels" height="100" className="me-2" />
            HOTWEELS
          </Link>
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav ms-auto flex-row gap-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coleccion">
                  Mi Colección
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categorias">
                  Categorías
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container pb-5">
        <Routes>
          <Route path="/" element={<Inicio vehicles={vehicles} />} />
          <Route
            path="/coleccion"
            element={
              <Coleccion
                vehicles={vehicles}
                toggleObtained={toggleObtained}
                toggleFav={toggleFav}
              />
            }
          />
          <Route
            path="/categorias"
            element={<Categorias vehicles={vehicles} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
