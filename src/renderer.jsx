import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // This is a good place to put any side effects or initializations
    console.log("App component mounted");
  }
  , []);
  return (
    <div className="text-white bg-gray-900 h-screen p-6">
      <h1 className="text-2xl font-bold">Welcome to Cryptfalcon 🦅 {count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me
      </button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
