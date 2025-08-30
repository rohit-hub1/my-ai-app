"use client";

interface SidebarProps {
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  temperature: number;
  setTemperature: (temp: number) => void;
  maxTokens: number;
  setMaxTokens: (tokens: number) => void;
  handleNewChat: () => void;
}

export default function Sidebar({
  selectedModel,
  setSelectedModel,
  temperature,
  setTemperature,
  maxTokens,
  setMaxTokens,
  handleNewChat,
}: SidebarProps) {
  return (
    <div className="lg:col-span-1 rounded-lg p-6 bg-gray-800 shadow-lg">
      <div className="mb-8">
        <button
          onClick={handleNewChat}
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
        >
          + New Chat
        </button>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-3 text-lg">Model</h2>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="w-full p-3 rounded-lg mb-6 bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
        >
          <option>GPT-3.5</option>
          <option>GPT-4</option>
          <option>Claude 2</option>
          <option>Llama 2</option>
        </select>

        <h2 className="font-semibold mb-3 text-lg">Parameters</h2>
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <label className="text-sm">Temperature: {temperature}</label>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <label className="text-sm">Max Tokens: {maxTokens}</label>
          </div>
          <input
            type="range"
            min="100"
            max="4000"
            step="100"
            value={maxTokens}
            onChange={(e) => setMaxTokens(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
