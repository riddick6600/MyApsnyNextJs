import { FC } from "react";

import "./Place.css";

interface PlaceProps {
  name: string;
  href: string;
  src: string;
  alt: string;
}

const Place: FC<PlaceProps> = ({ name, href, src, alt }) => {
  return (
    <div className="place">
      <a href={href}>
        <img className="place_img" src={src} alt={alt} />
      </a>
      <div className="place_block">
        <h4>{name}</h4>

        <div>{Math.round(Math.random() * 10)} Экскурсий</div>
        <div>{Math.round(Math.random() * 10)} Отелей</div>
        <div>{Math.round(Math.random() * 10)} Мероприятий</div>
      </div>
    </div>
  );
};

export default Place;
