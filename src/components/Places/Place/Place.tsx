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

        <div>{name.length} Экскурсий</div>
        <div>{name.length * 2} Отелей</div>
        <div>{name.length * 3} Мероприятий</div>
      </div>
    </div>
  );
};

export default Place;
