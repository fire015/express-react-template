import { useState } from "react";
import "./App.css";

export default function App() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleServerCheck = async () => {
    setError(null);
    setMessage(null);

    try {
      const response = await fetch("/api/health", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message || "Failed to connect to server");
    }
  };

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={handleServerCheck}>
          Server check
        </button>
        {message && <p>{message}</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </div>
    </div>
  );
}
