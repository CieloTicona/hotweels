import React, { useState } from "react";

export default function Categorias({ vehicles }) {
  const categories = [...new Set(vehicles.map((v) => v.category))];
  const [selectedCat, setSelectedCat] = useState(categories[0]);

  const catVehicles = vehicles.filter((v) => v.category === selectedCat);
  const obtained = catVehicles.filter((v) => v.obtained).length;
  const total = catVehicles.length;
  const percentage = total === 0 ? 0 : Math.round((obtained / total) * 100); // Punto Extra: Barra

  return (
    <div>
      <h2 className="text-cobalt mb-4">
        <i className="fa-solid fa-tags"></i> Categorías
      </h2>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`btn ${
              selectedCat === cat
                ? "bg-yellow text-dark fw-bold"
                : "btn-outline-secondary"
            }`}
            onClick={() => setSelectedCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="card shadow-sm border-0 p-4 mb-4">
        <h4 className="text-cobalt">Estadísticas de {selectedCat}</h4>
        <div className="d-flex justify-content-between mb-2">
          <span>
            Obtenidos: {obtained} / {total}
          </span>
          <span>{percentage}% Completado</span>
        </div>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="row g-3">
        {catVehicles.map((car) => (
          <div className="col-12 col-md-6" key={car.id}>
            <div className="card flex-row align-items-center p-2 border-0 shadow-sm">
              <img
                src={car.img}
                alt={car.name}
                style={{ width: "100px", height: "auto", borderRadius: "5px" }}
              />
              <div className="ms-3">
                <h5 className="m-0 fw-bold">{car.name}</h5>
                <span className={car.obtained ? "text-success" : "text-danger"}>
                  {car.obtained ? "En colección" : "Faltante"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
