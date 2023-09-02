import React, { useState } from "react";
import { axiosInstance } from "../../utils/axios.js";
import {useNavigate} from "react-router-dom"

function FormCreateIngredient() {
  const [name, setName] = useState("");
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
        setMessage("User registered successfully!");
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
      <form onSubmit={handleRegistration}>
      {/* Name */}
      <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Description */}
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        {/* Energetic Value */}
        <div>
          <label>Energetic Value</label>
          <input
            type="text"
            value={energeticValue}
            onChange={(e) => setEnergeticValue(e.target.value)}
            required
          />
        </div>
        {/* Total Fat */}
        <div>
          <label>Total Fat:</label>
          <input
            type="text"
            value={totalFat}
            onChange={(e) => setTotalFat(e.target.value)}
            required
          />
        </div>
        {/* Saturated Fat */}
        <div>
          <label>Saturated Fat:</label>
          <input
            type="text"
            value={saturatedFat}
            onChange={(e) => setSaturatedFat(e.target.value)}
            required
          />
        </div>
        {/* Carbs */}
        <div>
          <label>Carbs:</label>
          <input
            type="text"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
            required
          />
        </div>
        {/* Sugars */}
        <div>
          <label>Sugars:</label>
          <input
            type="text"
            value={sugars}
            onChange={(e) => setSugars(e.target.value)}
            required
          />
        </div>
        {/* Sodium */}
        <div>
          <label>Sodium:</label>
          <input
            type="text"
            value={sodium}
            onChange={(e) => setSodium(e.target.value)}
            required
          />
        </div>
        {/* Image */}
        <div>
          <label>Image:</label>
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