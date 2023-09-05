import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function DeleteIngredient() {

    const navigate = useNavigate()
    const [message, setMessage] = useState("");
    const { id } = useParams();

    const handleDeleteIngredient = async (e) => { 

        e.preventDefault();
         try {
          const response = await axios.delete(`/ingredients/${id}`, {   
          })
          if (response.status === 200) {
            setMessage("Ingredient deleted");
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
      
    </div>
  )
}
