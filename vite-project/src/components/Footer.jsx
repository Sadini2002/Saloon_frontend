import React from "react";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-white py-6 text-center shadow-inner">
      <p className="text-gray-600">© {new Date().getFullYear()} Modern Salon. All rights reserved.</p>
      <p className="text-pink-500 mt-2">0764961894</p>
      <p className="text-pink-500 mt-2 flex justify-center gap-2"> <SiGmail className="text-pink-500 mt-2 justify-center" /> sadininipunika67@gmail.com</p>
    </footer>
  );
}
