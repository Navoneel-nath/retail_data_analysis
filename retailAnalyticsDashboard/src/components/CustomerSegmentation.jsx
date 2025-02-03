import React from "react";
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
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

const CustomerSegmentation = () => {

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
        Customer Segmentation
      </h1>

     

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
  );
};

export default CustomerSegmentation;
