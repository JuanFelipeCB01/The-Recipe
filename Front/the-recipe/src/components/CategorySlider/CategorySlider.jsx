import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CategorySlider({category}) {
    const[ingredients, setIngredients] = useState([]);

    const getIngredients = async()=>{
        try {
            const {data} = await axios.get("http://localhost:5020/ingredients");
            const dataFiltered = data.filter((ingredient)=>{
                console.log(ingredient)    
                return ingredient.category === category && ingredient
            });
            console.log(category)
            setIngredients(dataFiltered);
        } catch (error) {
            console.error("Getting ingredients failed")
        }
    }

    useEffect(()=>{
        getIngredients();
    },[])

  return (
    <div>
        <ul>
            <h1>Slider</h1>
            {ingredients?.map((ingredient) => (
                <li>
                    <h1>{ingredient.name}</h1>
                    <img src={ingredient.image} alt={ingredient.name}></img>
                </li>
            ))}
        </ul>
    </div>
  )
}
