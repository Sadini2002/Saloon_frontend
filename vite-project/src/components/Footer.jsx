import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-6 text-center shadow-inner">
      <p className="text-gray-600">© {new Date().getFullYear()} Modern Salon. All rights reserved.</p>
      <p className="text-pink-500 mt-2">Built with ❤️ using React & Tailwind CSS</p>
    </footer>
  );
}
