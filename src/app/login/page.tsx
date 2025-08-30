"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // basic client-side check 
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/login-bg.jpg')" }}
    >
      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-purple-400 outline-none placeholder-gray-700 text-gray-900"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-purple-400 outline-none placeholder-gray-700 text-gray-900"
        />

        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
