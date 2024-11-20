import React from "react";
import "./Header.css";
import Navbar from "@/components/Header/Navbar/Navbar";
import Menu from "@/components/Header/Menu/Menu";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <Menu />
    </header>
  );
}

export default Header;
