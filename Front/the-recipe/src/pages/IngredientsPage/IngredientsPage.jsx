import React from 'react'

import FormCreateIngredient from '../../components/FormCreateIngredient/FormCreateIngredient'

import CategorySlider from '../../components/CategorySlider/CategorySlider'



function IngredientsPage(){
    return (
        <div>
        <h1>IngredientsPage</h1>
        <FormCreateIngredient/>
        <CategorySlider category="Vegetable"/>
        <CategorySlider category="Fruit"/>
        <CategorySlider category="Cereal"/>
        <CategorySlider category="Meat"/>
        </div>
    )
}

export default IngredientsPage