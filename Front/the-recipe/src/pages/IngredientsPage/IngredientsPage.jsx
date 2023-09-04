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
<>
        <div className="pt-16">
            <div className="container px-5 pt-8 mx-auto">
                <div className="text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    Ingredientes
                    </h1>
                    <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className='ingredients pt-16'>
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

        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    

    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
                <CategorySlider category="Fruit"/>
        </div>
      </div>
    </div>

  </div>
</section>


        </>
    )
}


export default IngredientsPage

