import React from 'react';
import { PropTypes } from 'prop-types';
import Slider from 'infinite-react-carousel';

import { Container } from './styles';

export default function Carousel(props) {
  const { sliders } = props;

  return (
    <Container>
      <Slider dots arrows={false} centerMode autoplay className="carousel">
        {sliders.map((slider, i) => (
          <div key={i} className="slider">
            <img src={slider.image} alt="slider" />
            <p className="title">{slider.title}</p>
            <p className="description">{slider.description}</p>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

Carousel.propTypes = {
  sliders: PropTypes.any,
};
