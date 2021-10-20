import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import Photo from "../../assets/Shirt.png";
import { useSelector } from "react-redux";
import { selectConfigurator } from "../../redux/selectors";
import { fetchVariantImages } from "../../api/apiUtils";

function CarouselSlider() {
  const configurator = useSelector(selectConfigurator);

  const imgViews = ["vollansicht_front", "vollansicht_rueck"];
  const [images, setImages] = useState({});

  useEffect(() => {
    fetchVariantImages(configurator).then(({ images: images_ }) => {
      setImages(images_);
    });
  }, [configurator]);

  return (
    <Carousel
      NextIcon={<ArrowForwardIosOutlinedIcon fontSize="large" />}
      PrevIcon={<ArrowBackIosOutlinedIcon fontSize="large" />}
      autoPlay={false}
      indicators={false}
      navButtonsAlwaysVisible={true}
    >
      {Object.keys(images).length && imgViews.map((view, i) => (
        <Item key={i} images={images[view]["01"]} />
      ))}
    </Carousel>
  );
}

function Item({ images }) {

  return (
    <Paper>
      <img src={images} width="100%" />
      {/* <img src={props.item} /> */}
    </Paper>
  );
}
export default CarouselSlider;
