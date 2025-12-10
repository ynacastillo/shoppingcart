import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/slider/slider-1.jpg';
import slider2 from '../assets/slider/slider-2.jpg';
import slider from '../assets/slider/slider-3.jpg';

import '../styles/slider.scss';

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1} alt="Slider 1"
                />
                <Carousel.Caption>
                    <h3 className="carousel-title text-uppercase fs-1">Get up to 20% off <br/> of All Jackets and Suits.</h3>
                    <p className="carousel-description fs-5">Starting at <b>$59.99</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2} alt="Slider 2"
                />
                <Carousel.Caption>
                    <h3 className="carousel-title text-uppercase fs-1">Get up to 10% off <br/> On Dress</h3>
                    <p className="carousel-description fs-5">Starting at <b>$249.99</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider} alt="Slider 3"
                />
                <Carousel.Caption>
                    <h3 className="carousel-title text-uppercase fs-1">Get up to 50% off <br/> On Fashion</h3>
                    <p className="carousel-description fs-5">Starting at <b>$99.99</b></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;