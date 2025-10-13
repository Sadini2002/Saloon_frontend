import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
       <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-pink-600">💇‍♀️ Modern Salon</h1>
        <ul className="flex space-x-6 font-medium">
          <li><a href="#home" className="hover:text-pink-500">Home</a></li>
          <li><a href="#services" className="hover:text-pink-500">Services</a></li>
          <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:py-24">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Refresh Your Look at <span className="text-pink-500">Modern Salon</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Experience the ultimate beauty treatment with professional stylists and a relaxing atmosphere.
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300">
            Book Appointment
          </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80"
            alt="Salon"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 py-16 bg-pink-50">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Our Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Hair Styling",
              desc: "Trendy cuts and styles from expert stylists.",
              img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Facial & Skincare",
              desc: "Rejuvenate your skin with our premium facial treatments.",
              img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Makeup",
              desc: "Professional makeup for weddings, parties, and events.",
              img: "https://images.unsplash.com/photo-1589367920883-2b1b58b7c96b?auto=format&fit=crop&w=600&q=80",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img src={service.img} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-2 text-pink-600">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white py-8 text-center shadow-inner">
        <p className="text-gray-600">© {new Date().getFullYear()} Modern Salon. All rights reserved.</p>
        <p className="text-pink-500 mt-2">Built with ❤️ using React & Tailwind CSS</p>
      </footer>
    </div>
  
    </>
  )
}

export default App
