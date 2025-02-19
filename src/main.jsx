import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot
import "./index.css"; // Import Tailwind CSS
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
