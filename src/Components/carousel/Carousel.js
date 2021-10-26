import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Photo from '../../assets/Shirt.png';

function CarouselSlider(props) {
  var items = [
    {
      img:'../../assets/Shirt.png'
    },
    {
      img:'../../assets/back.png'
    }
  ]

  return (
    <Carousel
      NextIcon={<NavigateNextIcon />}
      PrevIcon={<NavigateBeforeIcon />}
      autoPlay={false}
      indicators={false}
      navButtonsAlwaysVisible	={true}
    >
      {
        items.map((item, i) => <Item key={i} item={item.img} />)
      }
    </Carousel>
  )
}

function Item(props) {
  return (
    <Paper>
     <img src={Photo} width='100%'/>
     {/* <img src={props.item} /> */}
    </Paper>
  )
}
export default CarouselSlider;