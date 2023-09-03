import React from 'react'
import SliderMainHome from '../../components/SliderMainHome/SliderMainHome'
import AboutUsHome from '../../components/AboutUsHome/AboutUsHome'
import TopRecipesSlider from '../../components/TopRecipesSlider/TopRecipesSlider'
import ChefsHome from '../../components/ChefsHome/ChefsHome'
import CommnentsHome from '../../components/CommentsHome/CommentsHome'
import IngredientsHome from '../../components/IngredientsHome/IngredientsHome'


function HomePage(){
    return (
        <div>
        <SliderMainHome />
        <AboutUsHome />
        <TopRecipesSlider/>
        <IngredientsHome/>
        <ChefsHome/>
        <CommnentsHome/>
        </div>
    )
}

export default HomePage
