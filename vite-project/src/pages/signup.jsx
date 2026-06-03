import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // default role

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !role) {
      alert("Please fill all fields!");
      return;
    }

    // TODO: Send this data to backend (API)
    const userData = {
      name,
      email,
      password,
      role,
    };

    console.log(userData);
    alert(`Account created for ${name} as ${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 p-6">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-8">
          💖 Salon Signup
        </h1>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-300"
            >
              <option value="customer">Customer</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
