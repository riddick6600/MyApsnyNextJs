"use client";

import React from "react";
import Slider from "react-slick";

import Place from "./Place/Place";

import "./Places.css";

const settings = {
  dots: true,
  nav: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
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

export default function Places() {
  return (
    <section className="container__fluid container__silver">
      <h2 className="text-center">
        Где отдохнуть? Выберите направление сейчас!
      </h2>

      <Slider {...settings} className="categories">
        <Place
          href="https://myapsny.ru/location/%d0%b0%d0%b1%d1%85%d0%b0%d0%b7%d0%b8%d1%8f/%d0%be%d0%b7%d0%b5%d1%80%d0%be-%d1%80%d0%b8%d1%86%d0%b0"
          src="/wp-content/uploads/2024/05/riczaa-400x400.webp"
          alt="Озеро Рица"
          name="Озеро Рица"
        />
        <Place
          href="https://myapsny.ru/location/%d0%b0%d0%b1%d1%85%d0%b0%d0%b7%d0%b8%d1%8f/gagra"
          src="/wp-content/uploads/2022/04/гагра-главная-400x400.jpg"
          alt="Гагра"
          name="Гагра"
        />
        <Place
          href="https://myapsny.ru/location/%d0%b0%d0%b1%d1%85%d0%b0%d0%b7%d0%b8%d1%8f/picunda"
          src="/wp-content/uploads/2022/04/пицунда-главная-400x400.jpg"
          alt="Пицунда"
          name="Пицунда"
        />
        <Place
          href="https://myapsny.ru/location/%d0%b0%d0%b1%d1%85%d0%b0%d0%b7%d0%b8%d1%8f/novyj-afon"
          src="/wp-content/uploads/2024/08/afon-400x400.jpg"
          alt="Новый Афон"
          name="Новый Афон"
        />
        <Place
          href="https://myapsny.ru/location/%d0%b0%d0%b1%d1%85%d0%b0%d0%b7%d0%b8%d1%8f/%d0%be%d0%b7%d0%b5%d1%80%d0%be-%d1%80%d0%b8%d1%86%d0%b0"
          src="/wp-content/uploads/2024/05/riczaa-400x400.webp"
          alt="Озеро Рица"
          name="Озеро Рица"
        />
        <Place
          href="https://myapsny.ru/location/%d0%b0%d0%b1%d1%85%d0%b0%d0%b7%d0%b8%d1%8f/gagra"
          src="/wp-content/uploads/2022/04/гагра-главная-400x400.jpg"
          alt="Гагра"
          name="Гагра"
        />
        <Place
          href="https://myapsny.ru/location/%d0%b0%d0%b1%d1%85%d0%b0%d0%b7%d0%b8%d1%8f/picunda"
          src="/wp-content/uploads/2022/04/пицунда-главная-400x400.jpg"
          alt="Пицунда"
          name="Пицунда"
        />
        <Place
          href="https://myapsny.ru/location/%d0%b0%d0%b1%d1%85%d0%b0%d0%b7%d0%b8%d1%8f/novyj-afon"
          src="/wp-content/uploads/2024/08/afon-400x400.jpg"
          alt="Новый Афон"
          name="Новый Афон"
        />
      </Slider>
    </section>
  );
}
