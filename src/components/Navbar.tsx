"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img src="/logo-chernyj.png" alt="MyApsny" className="h-8" />
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/hotels" className="text-gray-700 hover:text-blue-600">
              Отели
            </Link>
            <Link
              href="/excursions"
              className="text-gray-700 hover:text-blue-600"
            >
              Экскурсии
            </Link>
            <Link
              href="/activities"
              className="text-gray-700 hover:text-blue-600"
            >
              Развлечения
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">
              Блог
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/hotels"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Отели
            </Link>
            <Link
              href="/excursions"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Экскурсии
            </Link>
            <Link
              href="/activities"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Развлечения
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Блог
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
