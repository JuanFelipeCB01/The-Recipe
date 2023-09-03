import React from 'react'

import FormCreateIngredient from '../../components/FormCreateIngredient/FormCreateIngredient'

import CategorySlider from '../../components/CategorySlider/CategorySlider'



function IngredientsPage(){
    return (
        <div>
        <h1>IngredientsPage</h1>
        <FormCreateIngredient/>
        <CategorySlider category="Vegetable"/>
        </div>
    )
}

export default IngredientsPage