import React, { useState } from "react";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  ArcElement,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Overview = () => {
  // Total Sales & Revenue (Sample Data)
  const revenueData = {
    labels: ["Daily", "Weekly", "Monthly"],
    datasets: [
      {
        label: "Total Sales (in ₹)",
        data: [15000, 120000, 500000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Revenue by Product Category
  const categoryData = {
    labels: ["Groceries", "Electronics", "Clothing", "Home", "Others"],
    datasets: [
      {
        label: "Revenue (₹)",
        data: [200000, 150000, 100000, 50000, 30000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  // Average Basket Size
  const basketData = {
    labels: ["Avg. Products per Transaction", "Avg. Order Value (₹)"],
    datasets: [
      {
        label: "Metrics",
        data: [5, 800],
        backgroundColor: ["#f87171", "#60a5fa"],
      },
    ],
  };

  // Peak Sales Hours (Heatmap Simulation)
  const peakHours = {
    labels: ["10 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
    datasets: [
      {
        label: "Sales Volume",
        data: [20, 50, 80, 120, 100],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  // Profit Margins (Overall & by Category)
  const profitMarginData = {
    labels: ["Groceries", "Electronics", "Clothing", "Home", "Others"],
    datasets: [
      {
        label: "Profit Margin (%)",
        data: [10, 20, 25, 15, 12],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const [filters, setFilters] = useState({
		date: "last30days",
		segment: "all",
	});

	const keyMetrics = {
		totalSales: 200000,
		customerSegments: 4,
		avgBasketSize: 5,
	};

 

  

    // Sales Trends (Weekly & Monthly Growth)
    const salesTrendData = {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Weekly Sales (₹)",
          data: [100000, 120000, 140000, 160000],
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          tension: 0.2,
        },
        {
          label: "Monthly Sales (₹)",
          data: [400000, 420000, 450000, 480000],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          tension: 0.2,
        },
      ],
    };
  
    // Customer Segments - Shopping Behavior
    const shoppingBehaviorData = {
      labels: ["Loyal Customers", "Discount Seekers", "Impulse Buyers", "Regular Shoppers"],
      datasets: [
        {
          label: "Customers",
          data: [30, 25, 20, 25],
          backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#2196F3"],
        },
      ],
    };
  
    // Customer Segments - Age Demographics
    const customerSegmentData = {
      labels: ["18-25", "26-35", "36-50", "50+"],
      datasets: [
        {
          label: "Customers",
          data: [40, 35, 15, 10],
          backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"],
        },
      ],
    };
  
    // Customer Segments - Gender
    const genderSegmentData = {
      labels: ["Male", "Female", "Others"],
      datasets: [
        {
          label: "Gender Distribution",
          data: [55, 40, 5],
          backgroundColor: ["#42a5f5", "#ff99cc", "#ffcc66"],
        },
      ],
    };



  return (
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-gray-900">
        Overview
      </h1>

      <div className="">
				<h2 className="text-2xl font-semibold mb-4">Analytics Overview</h2>

				{/* Key Metrics */}
				<div className="grid grid-cols-3 gap-4 mb-6">
					<div className="bg-white p-4 shadow-lg rounded-lg">
						<h3 className="text-lg">Total Sales</h3>
						<p className="text-2xl">${keyMetrics.totalSales}</p>
					</div>
					<div className="bg-white p-4 shadow-lg rounded-lg">
						<h3 className="text-lg">Customer Segments</h3>
						<p className="text-2xl">{keyMetrics.customerSegments}</p>
					</div>
					<div className="bg-white p-4 shadow-lg rounded-lg">
						<h3 className="text-lg">Average Basket Size</h3>
						<p className="text-2xl">{keyMetrics.avgBasketSize} items</p>
					</div>
				</div>

				{/* Filter Controls */}
				<div className="mb-6">
					<h3 className="text-xl mb-2">Filter by:</h3>
					<div className="flex space-x-4">
						<select
							value={filters.date}
							onChange={(e) => setFilters({ ...filters, date: e.target.value })}
							className="px-4 py-2 border rounded"
						>
							<option value="last30days">Last 30 Days</option>
							<option value="last90days">Last 90 Days</option>
							<option value="alltime">All Time</option>
						</select>
						<select
							value={filters.segment}
							onChange={(e) =>
								setFilters({ ...filters, segment: e.target.value })
							}
							className="px-4 py-2 border rounded"
						>
							<option value="all">All Segments</option>
							<option value="highvalue">High-Value Customers</option>
							<option value="lowvalue">Low-Value Customers</option>
						</select>
					</div>
				</div>

      <div className="p-8 space-y-6 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-semibold text-center text-gray-900">
              Supermart Analytics Dashboard
            </h1>
      
            {/* Sales Trends */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">Sales Trends</h2>
              <Line data={salesTrendData} />
            </div>
      
            {/* Customer Segmentation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Customer Segments - Shopping Behavior */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">Shopping Behavior</h2>
                <Pie data={shoppingBehaviorData} />
              </div>
      
              {/* Customer Segments - Age */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">Customer Segments (Age)</h2>
                <Pie data={customerSegmentData} />
              </div>
      
              {/* Customer Segments - Gender */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">Customer Segments (Gender)</h2>
                <Doughnut data={genderSegmentData} />
              </div>
            </div>
          </div>

				{/* Data Visualization (Charts) */}
				{/* <div className="grid grid-cols-2 gap-6">
					<div className="bg-white p-4 shadow-lg rounded-lg">
						<h3 className="text-lg">Sales Trends</h3> */}
						{/* You can use a charting library like Chart.js or Recharts here */}
						{/* <div className="bg-gray-200 h-40 rounded-lg"></div>
					</div>

					<div className="bg-white p-4 shadow-lg rounded-lg">
						<h3 className="text-lg">Customer Segments</h3>
						<div className="bg-gray-200 h-40 rounded-lg"></div>
					</div>
				</div> */}

				

      {/* Grid Layout for Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Total Sales & Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Total Sales & Revenue
          </h2>
          <Bar data={revenueData} />
        </div>

        {/* Revenue by Product Category */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Revenue by Category
          </h2>
          <Doughnut data={categoryData} />
        </div>

        {/* Average Basket Size */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Average Basket Size
          </h2>
          <Doughnut data={basketData} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Peak Sales Hours */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">
          Peak Sales Hours
        </h2>
        <Line data={peakHours} />
      </div>

      {/* Profit Margins */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">Profit Margins</h2>
        <Bar data={profitMarginData} />
      </div>

      </div>


      {/* Insights & Recommendations */}
				<div className="bg-white p-4 shadow-lg rounded-lg mt-6">
					<h3 className="text-xl">Insights & Recommendations</h3>
					<ul className="list-disc pl-5 mt-3">
						<li>Target high-value customers with personalized offers.</li>
						<li>Optimize product bundling for frequently bought items.</li>
						<li>Consider expanding stores in regions with high demand.</li>
						<li>Increase marketing efforts during peak shopping times.</li>
					</ul>
				</div>
			</div>
    </div>
  );
};

export default Overview;




// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import "chart.js/auto";

// const Overview = () => {
// 	const [filters, setFilters] = useState({
// 		date: "last30days",
// 		segment: "all",
// 	});

// 	const keyMetrics = {
// 		totalSales: 200000,
// 		customerSegments: 5,
// 		avgBasketSize: 10.5,
// 	};

// 	return (
		
// 			<div className="">
// 				<h2 className="text-2xl font-semibold mb-4">Analytics Overview</h2>

// 				{/* Key Metrics */}
// 				<div className="grid grid-cols-3 gap-4 mb-6">
// 					<div className="bg-white p-4 shadow-lg rounded-lg">
// 						<h3 className="text-lg">Total Sales</h3>
// 						<p className="text-2xl">${keyMetrics.totalSales}</p>
// 					</div>
// 					<div className="bg-white p-4 shadow-lg rounded-lg">
// 						<h3 className="text-lg">Customer Segments</h3>
// 						<p className="text-2xl">{keyMetrics.customerSegments}</p>
// 					</div>
// 					<div className="bg-white p-4 shadow-lg rounded-lg">
// 						<h3 className="text-lg">Average Basket Size</h3>
// 						<p className="text-2xl">{keyMetrics.avgBasketSize} items</p>
// 					</div>
// 				</div>

// 				{/* Filter Controls */}
// 				<div className="mb-6">
// 					<h3 className="text-xl mb-2">Filter by:</h3>
// 					<div className="flex space-x-4">
// 						<select
// 							value={filters.date}
// 							onChange={(e) => setFilters({ ...filters, date: e.target.value })}
// 							className="px-4 py-2 border rounded"
// 						>
// 							<option value="last30days">Last 30 Days</option>
// 							<option value="last90days">Last 90 Days</option>
// 							<option value="alltime">All Time</option>
// 						</select>
// 						<select
// 							value={filters.segment}
// 							onChange={(e) =>
// 								setFilters({ ...filters, segment: e.target.value })
// 							}
// 							className="px-4 py-2 border rounded"
// 						>
// 							<option value="all">All Segments</option>
// 							<option value="highvalue">High-Value Customers</option>
// 							<option value="lowvalue">Low-Value Customers</option>
// 						</select>
// 					</div>
// 				</div>

// 				{/* Data Visualization (Charts) */}
// 				<div className="grid grid-cols-2 gap-6">
// 					<div className="bg-white p-4 shadow-lg rounded-lg">
// 						<h3 className="text-lg">Sales Trends</h3>
// 						{/* You can use a charting library like Chart.js or Recharts here */}
// 						<div className="bg-gray-200 h-40 rounded-lg"></div>
// 					</div>

// 					<div className="bg-white p-4 shadow-lg rounded-lg">
// 						<h3 className="text-lg">Customer Segments</h3>
// 						<div className="bg-gray-200 h-40 rounded-lg"></div>
// 					</div>
// 				</div>

// 				{/* Insights & Recommendations */}
// 				<div className="bg-white p-4 shadow-lg rounded-lg mt-6">
// 					<h3 className="text-xl">Insights & Recommendations</h3>
// 					<ul className="list-disc pl-5 mt-3">
// 						<li>Target high-value customers with personalized offers.</li>
// 						<li>Optimize product bundling for frequently bought items.</li>
// 						<li>Consider expanding stores in regions with high demand.</li>
// 						<li>Increase marketing efforts during peak shopping times.</li>
// 					</ul>
// 				</div>
// 			</div>

// 	);
// };

// export default Overview;
