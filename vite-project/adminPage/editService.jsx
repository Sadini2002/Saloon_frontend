import React, { useState } from "react";

export default function EditServices() {
  const [services, setServices] = useState([
    { id: 1, name: "Hair Cut", price: 1500 },
    { id: 2, name: "Facial", price: 2500 },
    { id: 3, name: "Manicure", price: 1800 },
  ]);

  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");

  const addService = () => {
    if (!serviceName || !servicePrice) {
      alert("Please fill all fields!");
      return;
    }

    const newService = {
      id: Date.now(),
      name: serviceName,
      price: Number(servicePrice),
    };

    setServices([...services, newService]);
    setServiceName("");
    setServicePrice("");
  };

  const deleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl p-8 shadow-2xl">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-8">
          💅 Add / Edit Salon Services
        </h1>

        {/* Add Service Form */}
        <div className="bg-pink-50 p-6 rounded-2xl shadow-md mb-8">
          <h2 className="text-xl font-semibold text-pink-600 mb-4">Add New Service</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Service Name"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-300"
            />

            <input
              type="number"
              placeholder="Price (Rs.)"
              value={servicePrice}
              onChange={(e) => setServicePrice(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <button
            onClick={addService}
            className="mt-5 w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl text-lg font-semibold transition"
          >
            ➕ Add Service
          </button>
        </div>

        {/* Services List */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white border border-pink-200 p-5 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-pink-700">{s.name}</h3>
              <p className="text-gray-600 mt-2">💰 Rs. {s.price}</p>

              <button
                onClick={() => deleteService(s.id)}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
              >
                Delete Service
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
