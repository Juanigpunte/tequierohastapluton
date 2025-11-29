import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import BookPage from "./pages/BookPage.jsx";
import "./index.css";
import Navbar from "./components/layout/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/book/:id" element={<BookPage />} />
    </Routes>
  
  </BrowserRouter>
);
