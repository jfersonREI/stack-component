import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ResponsiveDemo from "./ResponsiveDemo";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={"/stack-component"}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/responsive" element={<ResponsiveDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
