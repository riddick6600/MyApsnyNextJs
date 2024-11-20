"use client";

import React from "react";
import Slider from "react-slick";

import Advantage from "./Advantage/Advantage";

import "./Advantages.css";

const settings = {
  dots: true,
  nav: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Advantages() {
  return (
    <section className="container">
      <h2 className="text-center">Наши преимущества</h2>

      <Slider {...settings} className="advantages">
        <Advantage
          src="/wp-content/uploads/2024/10/Безымянный111.png"
          alt="Удобная оплата онлайн"
          text="Удобная оплата онлайн"
        />
        <Advantage
          src="/wp-content/uploads/2024/10/human-support.jpg"
          alt="Поддержка на всех этапах"
          text="Поддержка на всех этапах"
        />
        <Advantage
          src="/wp-content/uploads/2024/10/icone-hotel.jpg"
          alt="Лучшие отели"
          text="Лучшие отели"
        />
        <Advantage
          src="/wp-content/uploads/2024/10/zEqwvcoJBWcXugolycR-.jpg"
          alt="Экскурсии по всей Абхазии"
          text="Экскурсии по всей Абхазии"
        />
      </Slider>
    </section>
  );
}
