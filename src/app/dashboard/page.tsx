"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";
import ThemeToggle from "@/components/ThemeToggle";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(
    "Hello! How can I assist you today?"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("GPT-3.5");
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(1000);

  // Function to handle prompt submission
  const handleSubmit = () => {
    if (prompt.trim() === "") return;

    setIsLoading(true);
    setResponse("Thinking...");

    // Simulate API call with a delay
    setTimeout(() => {
      const responses = [
        `Based on your prompt about "${prompt.substring(
          0,
          20
        )}...", I think the best approach would be to break it down into smaller components and tackle each one systematically.`,
        `I've analyzed your request regarding "${prompt.substring(
          0,
          30
        )}..." and here's my recommendation: start with a clear problem statement, then move to potential solutions.`,
        `Regarding "${prompt.substring(
          0,
          25
        )}...", the research shows that the most effective method is to iterate quickly and test often with real users.`,
        `For questions like "${prompt.substring(
          0,
          15
        )}...", I suggest considering multiple perspectives before arriving at a conclusion.`,
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      setResponse(randomResponse);
      setIsLoading(false);
    }, 1500);
  };

  // Function to handle new chat
  const handleNewChat = () => {
    setPrompt("");
    setResponse("Hello, how can i assist you today?");
    setIsLoading(false);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } transition-colors`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header with Theme Toggle */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            MyAI
          </h1>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Sidebar
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            temperature={temperature}
            setTemperature={setTemperature}
            maxTokens={maxTokens}
            setMaxTokens={setMaxTokens}
            handleNewChat={handleNewChat}
          />
          <ChatArea
            prompt={prompt}
            setPrompt={setPrompt}
            response={response}
            isLoading={isLoading}
            selectedModel={selectedModel}
            temperature={temperature}
            maxTokens={maxTokens}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
