import { FC } from "react";

import "./Category.css";

interface CategoryProps {
  src: string;
  alt: string;
  text: string;
}

const Category: FC<CategoryProps> = ({ src, alt, text }) => {
  return (
    <div className="category">
      <img className="category_img" src={src} alt={alt} />
      <h3 className="category_text">{text}</h3>
    </div>
  );
};

export default Category;
