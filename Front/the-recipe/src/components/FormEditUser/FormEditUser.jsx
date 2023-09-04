import React, { useState, useEffect } from "react";
import { useAuth } from "../../shared/AuthContext";

const EditUserForm = ({ userId }) => {
  const { user, token } = useAuth();
  console.log("userId:", user._id); // Agregamos el console.log aquí
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: 0,
    password: "",
  });

  useEffect(() => {
    // Realiza una solicitud GET para obtener los datos actuales del usuario
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/${userId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
        } else {
          // Manejar errores
        }
      } catch (error) {
        // Manejar errores
      }
    };

    fetchUserData();
  }, [userId, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        // Usuario actualizado con éxito
        // Realizar alguna acción, como redireccionar o mostrar un mensaje de éxito
      } else {
        // Manejar errores
      }
    } catch (error) {
      // Manejar errores
    }
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="age">Edad:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditUserForm;
