import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="top_social">
      <ul className="top_social_block top_social_block_left">
        <li>
          <a href="https://wa.me/79407712111?text=" target="_blank">
            +7 (940) 771 21-11
          </a>
        </li>
        <li>
          <a href="mailto:support@myapsny.ru">support@myapsny.ru</a>
        </li>
      </ul>
      <ul className="top_social_block top_social_block_right">
        <li>
          <a href="https://www.instagram.com/_myapsny_/" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://vk.com/myapsny7" target="_blank">
            VK
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
