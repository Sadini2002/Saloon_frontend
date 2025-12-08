import React from "react";
import { Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-200 flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-10">
          🌸 Salon Admin Dashboard
        </h1>

        {/* Grid Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* View Appointments */}
          <Link to="/view-appointments" className="w-full">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl text-white shadow-lg hover:scale-[1.03] hover:shadow-xl transition transform cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">📅 View Appointments</h2>
              <p className="text-sm opacity-90">
                Check all customer bookings and manage their status.
              </p>
            </div>
          </Link>

          {/* Add / Edit Services */}
          <Link to="/editService" className="w-full">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white shadow-lg hover:scale-[1.03] hover:shadow-xl transition cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">💅 Add / Edit Services</h2>
            <p className="text-sm opacity-90">
              Update salon services, pricing, and categories.
            </p>
          </div>
          </Link>

          {/* Manage Staff */}
          <Link to="/manageStaff" className="w-full">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg hover:scale-[1.03] hover:shadow-xl transition cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">👩‍🦰 Manage Staff</h2>
            <p className="text-sm opacity-90">
              Assign roles, schedules, and manage staff info.
            </p>
          </div>
          </Link>

          {/* Logout */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-2xl text-white shadow-lg hover:scale-[1.03] hover:shadow-xl transition cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">🚪 Logout</h2>
            <p className="text-sm opacity-90">
              Securely logout from the admin dashboard.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
