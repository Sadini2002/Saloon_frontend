import React from "react";

export default function Contact() {
  return (
    <section className="px-8 py-16 text-center text-gray-800">
      <h2 className="text-4xl font-bold text-pink-600 mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-8">We’d love to hear from you! Fill out the form below or visit our salon.</p>

      <form className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-8 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-pink-500" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:outline-pink-500" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-lg focus:outline-pink-500"></textarea>
        <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition cursor-pointer">Send Message</button>
      </form>
    </section>
  );
}
