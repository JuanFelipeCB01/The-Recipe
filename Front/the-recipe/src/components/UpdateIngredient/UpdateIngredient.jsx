import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { axiosInstance } from '../../utils/axios';
import axios from 'axios';

export default function UpdateIngredient({ingredient}) {
    const  { id } = useParams;
    const [name, setName] = useState(ingredient.name);
    const [description, setDescription] = useState(ingredient.description);
    const [category, setCategory] = useState(ingredient.category)
    const [energeticValue, setEnergeticValue] = useState(ingredient.energeticValue);
    const [totalFat, setTotalFat] = useState(ingredient.totalFat);
    const [saturatedFat, setSaturatedFat] = useState(ingredient.saturatedFat);
    const [carbs, setCarbs] = useState(ingredient.carbs);
    const [sugars, setSugars] = useState(ingredient.sugars);
    const [sodium, setSodium] = useState(ingredient.sodium);
    const [image, setImage] = useState(ingredient.image);
    const [message, setMessage] = useState();

    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault();
    
        try {
            console.log(id)
          const response = await axios.put(`http://localhost:5020/ingredients/${ingredient._id}`, {
            name,
            description,
            category,
            totalFat,
            saturatedFat,
            energeticValue,
            carbs,
            sugars,
            sodium,
            image
          })
    
          if (response.status === 200) {
            setMessage("Ingrdient Updated successfully!");
            navigate(`/ingredients/${ingredient._id}`);
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
      <h2>Update Ingredient</h2>
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
        <div>
        <label>Categoría:</label>
          <select
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
          </select>
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
        <button type="submit">Actualizar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
