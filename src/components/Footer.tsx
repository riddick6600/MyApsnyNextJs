import React from "react";
// import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__contacts">
          <p>Республика Абхазия, Пицунда, ул. Фруктовая 5</p>
          <a href="tel:+79407712111">+7 (940) 771-21-11</a>
        </div>
        <div className="footer__links">
          <a href="#">О нас</a>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Стать партнером</a>
        </div>
        <div className="footer__payment">
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="MasterCard" />
          <img src="/mir.png" alt="Мир" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
