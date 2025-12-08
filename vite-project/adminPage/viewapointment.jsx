import React, { useState } from "react";

export default function ViewAppointments() {
  const [appointments, setAppointments] = useState([
    { id: 1, name: "Nimali", date: "2025-12-10", time: "10:30 AM", service: "Hair Cut" },
    { id: 2, name: "Tharindi", date: "2025-12-12", time: "1:00 PM", service: "Facial" },
  ]);

  const handleCancel = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-6">
      <h1 className="text-4xl font-bold text-pink-700 text-center mb-6">
        💖 View Salon Appointments
      </h1>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No appointments available.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {appointments.map((a) => (
            <div
              key={a.id}
              className="bg-white p-6 rounded-2xl shadow-xl border border-pink-200 hover:shadow-2xl transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-bold text-pink-600">{a.name}</h2>
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
                  {a.service}
                </span>
              </div>

              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">📅 Date:</span> {a.date}
                </p>

                <p className="flex items-center gap-2">
                  <span className="font-semibold">⏰ Time:</span> {a.time}
                </p>
              </div>

              <button
                onClick={() => handleCancel(a.id)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
