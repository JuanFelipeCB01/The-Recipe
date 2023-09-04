import React, { useState } from "react";
import { axiosInstance } from "../../utils/axios.js";
import {useNavigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';

function FormCreateIngredient() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [energeticValue, setEnergeticValue] = useState("");
  const [totalFat, setTotalFat] = useState("");
  const [saturatedFat, setSaturatedFat] = useState("");
  const [carbs, setCarbs] = useState("");
  const [sugars, setSugars] = useState("");
  const [sodium, setSodium] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const formStyle = {
    backgroundColor: 'grey',
    padding: '15px',
    border: '1px',
    borderRadius: '25px'
  }

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/ingredients", {
        name,
        description,
        totalFat,
        saturatedFat,
        energeticValue,
        carbs,
        sugars,
        sodium,
        image
      })

      if (response.status === 200) {
        setMessage("UIngrdient added successfully!");
        navigate("/ingredients");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <h2>Add Ingredient</h2>
      <form style={formStyle} 
      onSubmit={handleRegistration}>
      {/* Name */}
      <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
        <label>Categoría:</label>
          <Form.Select aria-label="Default select example"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option>Vegetable</option>
            <option>Fruit</option>
            <option>Meat</option>
            <option>Cereal</option>
            <option>Oil</option>
          </Form.Select>
        </div>
        {/* Description */}
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        {/* Energetic Value */}
        <div>
          <label>Valor energético:</label>
          <input
            type="text"
            value={energeticValue}
            onChange={(e) => setEnergeticValue(e.target.value)}
            required
          />
        </div>
        {/* Total Fat */}
        <div>
          <label>Grasas:</label>
          <input
            type="text"
            value={totalFat}
            onChange={(e) => setTotalFat(e.target.value)}
            required
          />
        </div>
        {/* Saturated Fat */}
        <div>
          <label>Grasas saturadas:</label>
          <input
            type="text"
            value={saturatedFat}
            onChange={(e) => setSaturatedFat(e.target.value)}
            required
          />
        </div>
        {/* Carbs */}
        <div>
          <label>Carbohidratos:</label>
          <input
            type="text"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
            required
          />
        </div>
        {/* Sugars */}
        <div>
          <label>Azúcares:</label>
          <input
            type="text"
            value={sugars}
            onChange={(e) => setSugars(e.target.value)}
            required
          />
        </div>
        {/* Sodium */}
        <div>
          <label>Sodio:</label>
          <input
            type="text"
            value={sodium}
            onChange={(e) => setSodium(e.target.value)}
            required
          />
        </div>
        {/* Image */}
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default FormCreateIngredient;