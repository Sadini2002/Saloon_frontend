import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import  Appointment  from "./pages/Apointment";
import AdminPage from "./pages/admin";
//import Appointment from "./pages/BookAppointment";
import ViewAppointments from "../adminPage/viewapointment";
import EditServices from "../adminPage/editService";
import ManageStaff from "../adminPage/manageStaff";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-white">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/admin" element={<AdminPage />} /> 
          <Route path="/view-appointments" element={<ViewAppointments />} />
          <Route path="/editService" element={<EditServices/>} />
          <Route path="/manageStaff" element={<ManageStaff/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

