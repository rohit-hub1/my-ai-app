"use client";

interface ChatAreaProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  response: string;
  isLoading: boolean;
  selectedModel: string;
  temperature: number;
  maxTokens: number;
  handleSubmit: () => void;
}

export default function ChatArea({
  prompt,
  setPrompt,
  response,
  isLoading,
  selectedModel,
  temperature,
  maxTokens,
  handleSubmit,
}: ChatAreaProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
    alert("Response copied to clipboard!");
  };

  const exportToJSON = () => {
    const data = {
      prompt,
      response,
      model: selectedModel,
      parameters: {
        temperature,
        max_tokens: maxTokens,
      },
      timestamp: new Date().toISOString(),
    };

    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-response.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="lg:col-span-3 rounded-lg p-6 bg-gray-800 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">AI Playground</h2>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Response</label>
        <div className="min-h-[200px] rounded-lg p-4 bg-gray-700 overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse text-blue-500 flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing your request...
              </div>
            </div>
          ) : (
            <p className="whitespace-pre-wrap">{response}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Prompt</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="w-full min-h-[120px] rounded-lg p-4 bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
              handleSubmit();
            }
          }}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleSubmit}
          disabled={isLoading || prompt.trim() === ""}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 flex items-center gap-2"
        >
          <i className="fas fa-paper-plane"></i>
          {isLoading ? "Processing..." : "Run Prompt"}
        </button>

        <button
          onClick={copyToClipboard}
          disabled={isLoading || response === ""}
          className="px-6 py-3 rounded-lg font-medium bg-gray-700 text-white hover:bg-gray-600 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          <i className="fas fa-copy"></i>
          Copy
        </button>

        <button
          onClick={exportToJSON}
          disabled={
            isLoading ||
            response === "" ||
            response === "Hello! How can I assist you today?"
          }
          className="px-6 py-3 rounded-lg font-medium bg-gray-700 text-white hover:bg-gray-600 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          <i className="fas fa-download"></i>
          Export JSON
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        <p>Tip: Press Ctrl+Enter to run your prompt</p>
      </div>
    </div>
  );
}
