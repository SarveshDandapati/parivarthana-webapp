import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";

import {dataset} from '../../data.js';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

export default class ResponsiveSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            dots:false,
            nextArrow: false,
            prevArrow: false
          }
        }
      ]
    };
    return (
        <div className='slider'>
          <Slider {...settings}>
          {dataset.map((item)=>(
            <div className="product-1" key={item.id}>
              <img className="img" src={item.linkImg} alt="prd"/>
              <p className="prd-title">{item.title}</p>
              <p className="prd-price">&#8377; {item.price}</p>
            </div>
          ))}
        </Slider>
        </div>      
    );
  }
}
