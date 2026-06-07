import React, { useState } from "react";

export default function Coleccion({ vehicles, toggleObtained, toggleFav }) {
  const [search, setSearch] = useState(""); // Punto Extra: Búsqueda

  const filteredVehicles = vehicles.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-cobalt mb-4">
        <i className="fa-solid fa-car-side"></i> Mi Colección
      </h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar vehículo por nombre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row g-4">
        {filteredVehicles.map((car) => (
          <div className="col-12 col-md-6 col-lg-4" key={car.id}>
            <div
              className={`card car-card h-100 ${
                car.obtained ? "card-obtained" : "card-missing"
              }`}
            >
              <img src={car.img} className="card-img-top" alt={car.name} />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title fw-bold m-0">{car.name}</h5>
                  {/* Punto Extra: Favoritos */}
                  <i
                    className={`fa-solid fa-star fs-5 ${
                      car.fav ? "text-yellow" : "text-secondary"
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleFav(car.id)}
                  ></i>
                </div>
                <p className="card-text text-muted mb-1">
                  {car.category} | Año: {car.year}
                </p>
                <p className="fw-bold mb-3">
                  Estado:{" "}
                  {car.obtained ? (
                    <span className="text-success">En Colección</span>
                  ) : (
                    <span className="text-danger">Faltante</span>
                  )}
                </p>

                <button
                  className={`btn w-100 ${
                    car.obtained ? "btn-outline-danger" : "bg-blue text-white"
                  }`}
                  onClick={() => toggleObtained(car.id)}
                >
                  {car.obtained ? "Remover de Colección" : "¡Lo Conseguí!"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
