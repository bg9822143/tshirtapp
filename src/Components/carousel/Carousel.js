import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { useSelector } from "react-redux";
import { selectConfigurator } from "../../redux/selectors";
import { fetchVariantImages } from "../../api/apiUtils";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  carousalContainer: {
    height: 685,
  },
  front: {
    zIndex: 100,
  },
});

function CarouselSlider() {
  const classes = useStyles();

  const configurator = useSelector(selectConfigurator);

  const imgViews = ["vollansicht_front", "vollansicht_rueck", "detail_kragen", "detail_manschette", "detail_monogramm"];
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
      navButtonsWrapperProps={{ className: classes.front }}
      className={classes.carousalContainer}
    >
      {Object.keys(images).length &&
        imgViews.filter((v) => Object.keys(images[v]).length).map((view, i) => <Item key={i} images={images[view]} />)}
    </Carousel>
  );
}

function Item({ images }) {
  return (
    <Paper>
      {images &&
        Object.entries(images).map(([order, src]) => (
          <img
            src={src}
            width="100%"
            style={{ zIndex: +order, position: "absolute" }}
            alt=""
          />
        ))}
      {/* <img src={props.item} /> */}
    </Paper>
  );
}
export default CarouselSlider;
