import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'

import 'swiper/css';
import 'swiper/css/effect-creative';

import { EffectCreative } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function CategorySlider({category}) {
    const[ingredients, setIngredients] = useState([]);

    const getIngredients = async()=>{
        try {
            const {data} = await axios.get("http://localhost:5020/ingredients");
            const dataFiltered = data.filter((ingredient)=>{   
                return ingredient.category === category && ingredient
            });
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
        <h1>{category}</h1>
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper">
            {ingredients?.map((ingredient) => (
                <SwiperSlide> 
                    <Link to={`/ingredients/${ ingredient._id}`} className='ingredient'>
                        <h1>{ingredient.name}</h1>
                        <img className='ingredient-image' src={ingredient.image} alt={ingredient.name}></img>
                    </Link>    
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}
