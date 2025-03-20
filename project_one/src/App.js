import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-5">
        <nav className="flex justify-center space-x-4 bg-white p-3 shadow-md rounded-lg">
          <NavLink to="/" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-500 hover:text-white" 
            style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
            Top Users
          </NavLink>
          <NavLink to="/trending" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-500 hover:text-white">
            Trending Posts
          </NavLink>
          <NavLink to="/feed" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-500 hover:text-white">
            Live Feed
          </NavLink>
        </nav>

        <div className="mt-5">
          <Routes>
            <Route path="/" element={<TopUsers />} />
            <Route path="/trending" element={<TrendingPosts />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


