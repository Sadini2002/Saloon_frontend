import React, { useState } from "react";

export default function ManageStaff() {
  const [staff, setStaff] = useState([
    { id: 1, name: "Sanduni", role: "Hair Stylist" },
    { id: 2, name: "Nethmi", role: "Beautician" },
    { id: 3, name: "Ishara", role: "Nail Artist" },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const addStaff = () => {
    if (!name || !role) {
      alert("Please fill all fields!");
      return;
    }

    const newStaff = {
      id: Date.now(),
      name,
      role,
    };

    setStaff([...staff, newStaff]);
    setName("");
    setRole("");
  };

  const deleteStaff = (id) => {
    setStaff(staff.filter((member) => member.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl p-8 shadow-2xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-8">
          👩‍🦰 Manage Salon Staff
        </h1>

        {/* Add Staff Section */}
        <div className="bg-purple-50 p-6 rounded-2xl shadow-md mb-8">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Add New Staff Member</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Staff Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-300"
            />

            <input
              type="text"
              placeholder="Role (e.g., Hair Stylist)"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-300"
            />
          </div>

          <button
            onClick={addStaff}
            className="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-lg font-semibold transition"
          >
            ➕ Add Staff
          </button>
        </div>

        {/* Staff List */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Staff Members</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-purple-200 p-5 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-purple-700">{member.name}</h3>
              <p className="text-gray-600 mt-2">💼 {member.role}</p>

              <button
                onClick={() => deleteStaff(member.id)}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
              >
                Delete Staff
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
