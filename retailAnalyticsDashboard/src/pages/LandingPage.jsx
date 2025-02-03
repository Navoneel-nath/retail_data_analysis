import React from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-purple-700">Supermart Analytics</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-600 hover:text-gray-900">Platform</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Solutions</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
        </div>
        <div className="space-x-4 flex items-center">
          <button className="text-gray-600 hover:text-gray-900">Login</button>
          <button className="border px-4 py-2 rounded-lg">Contact Sales</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">Get Started Free</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-gray-900">Turn Data into Decisions</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Analytics that make it easy to get answers, make decisions, and show the impact of your product and marketing investments.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-purple-700 text-white px-6 py-3 rounded-lg text-lg cursor-pointer" onClick={()=>{navigate("/fileSubmit")}}>Get Started Free</button>
          <button className="border px-6 py-3 rounded-lg text-lg cursor-pointer">Get a Demo</button>
        </div>
      </div>

      {/* Dashboard Preview */}
      {/* <div className="relative flex justify-center mt-12">
        <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Core Company KPIs</h2>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-100 p-4 rounded-lg">📊 Top Categories</div>
            <div className="bg-gray-100 p-4 rounded-lg">📈 Annual Revenue</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
