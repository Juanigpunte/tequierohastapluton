import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import BookPage from "./pages/BookPage.jsx";
import AboutAuthor from "./components/AboutAuthor.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="/about-author" element={<AboutAuthor />} />
    </Routes>
  </BrowserRouter>
);
