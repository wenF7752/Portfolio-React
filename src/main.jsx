/**
 * @author Wen Fang
 * @license Apache 2.0
 */

// node_modules

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Component
import App from "./App.jsx";
// CSS
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
