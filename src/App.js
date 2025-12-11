import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ItemsList from "./components/ItemsList";
import Dashboard from "./components/Dashboard";
import GithubViewer from "./components/GithubViewer";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Items</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/github">GitHub Viewer</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<ItemsList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/github" element={<GithubViewer />} />
        </Routes>
      </div>
    </Router>
  );
}