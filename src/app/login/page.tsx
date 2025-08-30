// app/login/page.tsx
"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Initialize particles
    const createParticles = () => {
      const container = document.getElementById("particles");
      if (!container) return;

      container.innerHTML = "";
      const particleCount = 30;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Random properties
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      // Redirect to dashboard after successful login
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
      {/* Background effects */}
      <div
        id="particles"
        className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
      ></div>

      <div className="bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-xl p-6 sm:p-8 w-full max-w-md z-10 relative border border-gray-700 shadow-xl">
        <div className="text-center mb-8">
          <div className="animate-float mb-4">
            <i className="fas fa-brain text-5xl text-indigo-500"></i>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
            NexusAI
          </h1>
          <p className="text-gray-400 mt-2">Intelligent Systems Login</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-300 mb-2 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-300 mb-2 font-medium"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={`far ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-400"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-emerald-500 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-emerald-600 transition-all duration-300 animate-pulse disabled:opacity-75"
          >
            {isLoading ? (
              <i className="fas fa-spinner fa-spin mr-2"></i>
            ) : (
              <i className="fas fa-lock-open mr-2"></i>
            )}
            {isLoading ? "Authenticating..." : "Continue"}
          </button>
        </form>

        <div className="relative flex items-center justify-center my-6">
          <div className="border-t border-gray-700 w-full"></div>
          <span className="text-gray-500 text-sm bg-gray-900 px-3 absolute">
            Or continue with
          </span>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors">
            <i className="fab fa-google"></i>
          </button>
          <button className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors">
            <i className="fab fa-github"></i>
          </button>
          <button className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gray-700 transition-colors">
            <i className="fab fa-microsoft"></i>
          </button>
        </div>

        <div className="text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Sign up
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          pointer-events: none;
        }

        body {
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          color: #fff;
          min-height: 100vh;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}
