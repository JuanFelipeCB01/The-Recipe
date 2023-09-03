import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function IngredientsDetailPage(){
    const { id } = useParams();
    const [ingredient, setIngredient] = useState();

    const getIngredient = async () => {
        try {
            const item = await axios.get( `http://localhost:5020/${ id }`);
            setIngredient(item);
        } catch (error) {
            console.error(500);
        }
        console.log(id);
    }

    useEffect(()=>{
        getIngredient();
    },[])

    return (
        <div>
            <h1>{ingredient.name}</h1>
        </div>
    )
}

export default IngredientsDetailPage