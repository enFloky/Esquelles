import React from 'react';
import '../styles/body.css'; // Importa el CSS global

const excursionsData = [
  {
    id: 1,
    name: 'Travessa del Parc Natural',
    difficulty: 'Mitjana',
    distance: '15 km',
    description: 'Una excursió espectacular pel Parc Natural amb vistes panoràmiques.'
  },
  {
    id: 2,
    name: 'Ruta del Riu',
    difficulty: 'Fàcil',
    distance: '8 km',
    description: 'Ideal per a famílies, resseguint la riba del riu amb espais de pícnic.'
  },
  // Afegeix més dades segons convingui
];

function Excursions() {
  return (
    <section className="pageContainer">
      <h2>Les nostres Excursions</h2>
      <div className="cardContainer">
        {excursionsData.map((excursion) => (
          <div key={excursion.id} className="card">
            <h3>{excursion.name}</h3>
            <p><strong>Dificultat:</strong> {excursion.difficulty}</p>
            <p><strong>Distància:</strong> {excursion.distance}</p>
            <p>{excursion.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Excursions;

