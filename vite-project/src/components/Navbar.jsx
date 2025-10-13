import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-pink-600">💇‍♀️ Modern Salon</Link>
      <ul className="flex space-x-6 font-medium">
        <li><NavLink to="/" className={({isActive}) => isActive ? "text-pink-500" : "hover:text-pink-500"}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? "text-pink-500" : "hover:text-pink-500"}>About</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? "text-pink-500" : "hover:text-pink-500"}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}
