import Link from "next/link";

import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu_block">
        <li>
          <Link href="/">
            <img src="/logo3.png" />
          </Link>
        </li>
        <li>
          <Link href="/hotels">ОТЕЛИ</Link>
        </li>
        <li>
          <Link href="/excursions">ЭКСКУРСИИ</Link>
        </li>
        <li>
          <Link href="/activities">РАЗВЛЕЧЕНИЯ</Link>
        </li>
        <li>
          <Link href="/blog">БЛОГ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
