import React from "react";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Salon Admin Page
        </h1>

        <div className="space-y-4">

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            View Appointments
          </button>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
            Add / Edit Services
          </button>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition">
            Manage Staff
          </button>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">
            Logout
          </button>

        </div>
      </div>
    </div>
  );
};

export default AdminPage;
