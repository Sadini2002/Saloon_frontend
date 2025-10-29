import React, { useState } from "react";

export default function SalonAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Add appointment
  const handleBook = (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      alert("Please fill all fields!");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      name,
      date,
      time,
    };

    setAppointments([...appointments, newAppointment]);
    setName("");
    setDate("");
    setTime("");
  };

  // Cancel appointment
  const handleCancel = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
        💇‍♀️ Salon Appointment Booking
      </h1>

      {/* Booking Form */}
      <form
        onSubmit={handleBook}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Book an Appointment
        </h2>

        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Date:</label>
          <input
            type="date"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Time:</label>
          <input
            type="time"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Book Appointment
        </button>
      </form>

      {/* Appointment List */}
      <div className="w-full max-w-2xl mt-6">
        <h2 className="text-lg font-semibold mb-3 text-center text-gray-700">
          Your Appointments
        </h2>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-500">No appointments yet.</p>
        ) : (
          <ul className="space-y-3">
            {appointments.map((a) => (
              <li
                key={a.id}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm"
              >
                <div>
                  <p className="font-semibold text-gray-800">{a.name}</p>
                  <p className="text-sm text-gray-600">
                    {a.date} at {a.time}
                  </p>
                </div>
                <button
                  onClick={() => handleCancel(a.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
