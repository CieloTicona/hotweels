import React from "react";

export default function Inicio({ vehicles }) {
  const total = vehicles.length;
  const obtained = vehicles.filter((v) => v.obtained).length;
  const missing = total - obtained;

  const categories = [...new Set(vehicles.map((v) => v.category))];

  return (
    <div>
      <div className="p-5 mb-4 bg-blue text-white rounded-3">
        <div className="container-fluid py-2">
          <h1 className="display-5 fw-bold text-yellow">
            Bienvenido a tu Garaje!
          </h1>
          <p className="col-md-8 fs-5">
            Administra tu colección de HotWheels de forma sencilla y rápida
          </p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-center h-100 p-3 shadow-sm border-0">
            <h3>
              <i className="fa-solid fa-car text-cobalt"></i>
            </h3>
            <h5 className="card-title fw-bold">Total Vehículos</h5>
            <h2>{total}</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center h-100 p-3 shadow-sm border-0">
            <h3>
              <i className="fa-solid fa-check text-blue"></i>
            </h3>
            <h5 className="card-title fw-bold">Obtenidos</h5>
            <h2>{obtained}</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center h-100 p-3 shadow-sm border-0">
            <h3>
              <i className="fa-solid fa-xmark text-pink"></i>
            </h3>
            <h5 className="card-title fw-bold">Faltantes</h5>
            <h2>{missing}</h2>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-cobalt">
          <i className="fdisplay-5 fw-bold text-yellow"></i> Categorías
          Disponibles
        </h4>
        <div className="d-flex flex-wrap gap-2 mt-3">
          {categories.map((cat, idx) => (
            <span key={idx} className="badge bg-cobalt p-2 fs-6">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
