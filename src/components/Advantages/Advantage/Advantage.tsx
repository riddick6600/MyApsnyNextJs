import { FC } from "react";

import "./Advantage.css";

interface AdvantageProps {
  src: string;
  alt: string;
  text: string;
}

const Advantage: FC<AdvantageProps> = ({ src, alt, text }) => {
  return (
    <div className="advantage">
      <img className="advantage_img" src={src} alt={alt} />
      <h3 className="advantage_text">{text}</h3>
    </div>
  );
};

export default Advantage;
