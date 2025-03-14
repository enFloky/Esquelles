import React, { useState } from 'react';
import '../styles/body.css'; // Importa el CSS global

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí faries el que calgui (enviar un correu, guardar en una base de dades, etc.)
    alert(`Gràcies per contactar! ${formData.name}`);
  };

  return (
    <section className="contactContainer">
      <h2>Contacte</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Nom:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>Correu:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>Missatge:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
