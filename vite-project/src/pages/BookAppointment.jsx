import React, { useState } from "react";

export default function BookAppointment() {
  const [closedDates, setClosedDates] = useState(["2025-10-15", "2025-10-20"]);
  const [newDate, setNewDate] = useState("");

  const addClosedDate = () => {
    if (newDate && !closedDates.includes(newDate)) {
      setClosedDates([...closedDates, newDate]);
      setNewDate("");
    }
  };

  const removeClosedDate = (date) => {
    setClosedDates(closedDates.filter((d) => d !== date));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Admin Panel
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Add Closed Date
            </label>
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-gray-600"
            />
            <button
              onClick={addClosedDate}
              className="w-full mt-2 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Add Closed Date
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Closed Dates:
            </h3>
            {closedDates.length === 0 ? (
              <p className="text-gray-500">No closed dates</p>
            ) : (
              <ul className="space-y-2">
                {closedDates.map((date) => (
                  <li
                    key={date}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded-lg"
                  >
                    <span>{date}</span>
                    <button
                      onClick={() => removeClosedDate(date)}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
