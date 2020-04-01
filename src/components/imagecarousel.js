import React, {useState} from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import './imagecarousel.css';

  const ImageCarousel = (props) =>{
      //from reactstrap documentation -  https://reactstrap.github.io/components/carousel/
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const items = [
        {
            src:props.images[0],
            altText:`slide1`,
        },
        {
            src:props.images[1],
            altText:`slide2`,
        },
        {
            src:props.images[2],
            altText:`slide3`,
        }
    ]

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }

    const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }

      const slides = items.map((item) => {
        
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText}  style={{margin:`auto`,}}/>
       
          </CarouselItem>
        );
      });

      return (
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          style={{ maxHeight:`500vh`, justifyContent:`center`, alignItems:`center`,textAlign:`center`,}}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      );
    
    
  }
  export default ImageCarousel;