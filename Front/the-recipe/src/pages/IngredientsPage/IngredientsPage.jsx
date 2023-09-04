import React, { useState } from 'react';
import FormCreateIngredient from '../../components/FormCreateIngredient/FormCreateIngredient'
import CategorySlider from '../../components/CategorySlider/CategorySlider'

import './IngrdientPage.css'
import { useAuth } from '../../shared/AuthContext';



function IngredientsPage(){

    const auth = useAuth();
    const { user } = useAuth();
    const [display, setDisplay] = useState(false);

    const displayForm = () =>{
        setDisplay(!display)
    }

    return (
        <div className='ingredients'>
            <h1 className='ingredients-title'>Los ingredientes de nuestras recetas:</h1>
            {auth.isAuthenticated && user.role === "admin" && (
                <section class="text-gray-600 body-font">
                    <div class="container px-5 mx-auto">
                        <button onClick={displayForm} class="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-0">+ Agregar Ingrediente</button>
                    </div>
                </section>
            )}
            {display && <div><FormCreateIngredient/></div>}
            <div className='ingredients-slider'>
                <CategorySlider category="Vegetable"/>
            </div>
            <div className='ingredients-slider'>
                <CategorySlider category="Fruit"/>
            </div>
            <div className='ingredients-slider'>
                <CategorySlider category="Cereal"/>
            </div>
            <div className='ingredients-slider'>
                <CategorySlider category="Meat"/>
            </div>
            <div className='ingredients-slider'>
                <CategorySlider category="Oil"/>
            </div>
            <div className='ingredients-slider'>
                <CategorySlider category="Fungus"/>
            </div>
        </div>
    )
}

export default IngredientsPage