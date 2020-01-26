import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import React, { useState } from 'react';

const items = [
  {
    src: '/assets/images/panini.png',
    altText: 'A panini on a plate with a Cool Beans mug next to it',
    caption: 'Enjoy a Treat from our Menu'
  },
  {
    src: '/assets/images/indoorshot1.png',
    altText: 'A look inside Cool Beans Coffee Cafe; showing wooden tables and chairs, a horse sculpture, glass doors leading to the private meeting room, and a person working at a table. ',
    caption: 'Stay a While'
  },
  {
    src: '/assets/images/outdoorshot1.png',
    altText: 'A look at Cool Beans from outside; the Cool Beans sign in red on a silver building with 8 large windows.',
    caption: 'Find us in East Towne'
  }
];


const HomeCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex - 1;
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
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    
    <div className="container">
        <div className="row row-content">
          <div className="col-12 col-lg-8 mx-auto">
            <Carousel 
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
          </div>
        </div>
      </div>
  );
}

export default HomeCarousel;