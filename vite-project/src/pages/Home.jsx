import React from "react";
import { Link } from "react-router-dom";
import BookAppointment from "./BookAppointment";
import Admin from "./Apointment";

export default function Home() {
  return (
    <section className="px-8 py-16 text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Refresh Your Look at <span className="text-pink-500">Modern Salon</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Experience the ultimate beauty treatment with professional stylists and a relaxing atmosphere.
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300 ">
            <Link to="/book-appointment">
            Admin Panel
            
            </Link>
          </button>
          <Link
        to="/admin"
        className="mt-4 px-6 py-3 bg-gray-700 text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-800 transition-all"
      >
        Book Appointment
      </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80"
            alt="Salon"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </div>

      {/* Services */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Hair Styling", desc: "Trendy cuts and expert styling.", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80" },
            { title: "Facials", desc: "Rejuvenate your skin with premium care.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80" },
            { title: "Makeup", desc: "Professional makeup for any event.", img: "https://images.unsplash.com/photo-1589367920883-2b1b58b7c96b?auto=format&fit=crop&w=600&q=80" },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-pink-600 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
