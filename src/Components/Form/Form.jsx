import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Ingrese Nombre"
        />

        <input
          type="text"
          name="email"
          placeholder="Ingrese mail"
          onChange={handleChange}
        />

        <input
          type="text"
          name="password"
          placeholder="Ingrese contraseña"
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
