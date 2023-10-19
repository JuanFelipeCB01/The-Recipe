import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper/modules";
import { Link } from "react-router-dom";
import { withWidth } from "@material-ui/core";
import { blueGrey, grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
    root: {
      maxWidth: 600,
    },
    media: {
      height: 140,
    },
  });

export default function CategorySlider({ category }) {
    const classes = useStyles();
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    try {
      const { data } = await axios.get("http://localhost:5020/ingredients");
      const dataFiltered = data.filter((ingredient) => {
        return ingredient.category === category && ingredient;
      });
      setIngredients(dataFiltered);
    } catch (error) {
      console.error("Getting ingredients failed");
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div  style={{margin: 12}}>
      <div className="container px-5 pt-8 mx-auto">
          <div className="text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              {category}s
            </h1>
            <div className="flex mt-6 justify-center mb-16">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
        </div>
      <Swiper
        style={{ maxWidth: '600px'}}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {ingredients?.map((ingredient) => (
          <SwiperSlide>
            <Link
              to={`/ingredients/${ingredient._id}`}
              className="object-contain shadow-xl"
            >
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={ingredient.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {ingredient.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                    {ingredient.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Detalles
                  </Button>
                </CardActions>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
