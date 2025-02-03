import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import Overview from "../components/Overview";
import CustomerInsights from "../components/CustomerInsights";
import ProductInsights from "../components/ProductInsights";
import LocationInsights from "../components/LocationInsights";
import CustomerSegmentation from "../components/CustomerSegmentation";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white min-h-screen p-4">
      <div className="fixed top-0 left-0 p-4">
      <h1 className="text-xl font-semibold mb-4">SuperMart Dashboard</h1>
        <ul>
          <li className="mb-2 cursor-pointer" onClick={() => setActiveTab('overview')}>Overview</li>
          <li className="mb-2 cursor-pointer" onClick={() => setActiveTab('customerInsights')}>Customer Insights</li>
					<li className="mb-2 cursor-pointer" onClick={() => setActiveTab('productInsights')}>Product Insights</li>
					<li className="mb-2 cursor-pointer" onClick={() => setActiveTab('locationInsights')}>Location Insights</li>
					<li className="mb-2 cursor-pointer" onClick={() => setActiveTab('customerSegmentation')}>Customer Segmentation</li>
        </ul>
      </div>
       

      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        {activeTab === 'overview' && <Overview/>}
        {activeTab === 'customerInsights' && <CustomerInsights />}
        {activeTab === 'productInsights' && <ProductInsights />}
        {activeTab === 'locationInsights' && <LocationInsights />}
        {activeTab === 'customerSegmentation' && <CustomerSegmentation/>}
      </div>
    </div>
  );
};

// export default App;

// function Analytics() {
//   const location = useLocation();
//   const { totalSales, averageSale, customerSegments } = location.state || {};
//   const [filter, setFilter] = useState("all");

//   // Example data for customer segments
//   const customerData = {
//     labels: ["Segment A", "Segment B", "Segment C"],
//     datasets: [
//       {
//         label: "Customer Segments",
//         data: [30, 50, 20],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//       },
//     ],
//   };

//   // Example sales data for bar chart
//   const salesData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//     datasets: [
//       {
//         label: "Total Sales",
//         data: [5000, 7000, 8000, 6000, 7500],
//         backgroundColor: "#36A2EB",
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold text-blue-600 mb-4">Sales Analytics Dashboard</h1>
//       <div className="mt-4 p-4 bg-white rounded-md shadow-md w-3/4">
//         <p><strong>Total Sales:</strong> ${totalSales || 0}</p>
//         <p><strong>Average Sale:</strong> ${averageSale ? averageSale.toFixed(2) : 0}</p>
//         <p><strong>Customer Segments:</strong> {customerSegments || "N/A"}</p>
//       </div>
      
//       <div className="w-3/4 mt-6">
//         <h2 className="text-xl font-bold text-gray-700">Customer Segments</h2>
//         <Pie data={customerData} />
//       </div>
      
//       <div className="w-3/4 mt-6">
//         <h2 className="text-xl font-bold text-gray-700">Sales Over Time</h2>
//         <Bar data={salesData} />
//       </div>
      
//       <div className="w-3/4 mt-6">
//         <h2 className="text-xl font-bold text-gray-700">Filters</h2>
//         <select 
//           className="mt-2 p-2 border rounded-md"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="segmentA">Segment A</option>
//           <option value="segmentB">Segment B</option>
//           <option value="segmentC">Segment C</option>
//         </select>
//       </div>
//     </div>
//   );
// }

export default Analytics;
