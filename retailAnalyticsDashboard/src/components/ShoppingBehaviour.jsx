import React from 'react';
import { Line } from 'react-chartjs-2'; // For graphs, you can use Chart.js or any other library
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const ShoppingBehaviour = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales Growth (YoY)',
        data: [0, 10, 5, 15, 20, 25],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Sales Growth (MoM)',
        data: [0, 5, 8, 13, 18, 22],
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-8 space-y-6 bg-gray-50">
      <h1 className="text-4xl font-semibold text-center text-gray-900">Shopping Behaviour</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Purchase Frequency Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Purchase Frequency</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex justify-between">
              <span>Daily Shoppers</span>
              <span>40%</span>
            </li>
            <li className="flex justify-between">
              <span>Weekly Shoppers</span>
              <span>30%</span>
            </li>
            <li className="flex justify-between">
              <span>Monthly Shoppers</span>
              <span>30%</span>
            </li>
          </ul>
        </div>

        {/* Seasonal Sales Trends */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Seasonal Sales Trends</h2>
          <div className="mt-4">
            <Line data={data} />
          </div>
        </div>

        {/* Promotion Performance */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Promotion Performance</h2>
          <div className="mt-4">
            <p className="font-medium text-gray-800">Impact of Discounts: +25%</p>
            <p className="font-medium text-gray-800">Campaigns: +15%</p>
          </div>
        </div>
      </div>

      {/* Customer Journey Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">Customer Journey Analysis</h2>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col items-center">
            <p className="text-gray-800 font-medium">Online</p>
            <p className="text-2xl font-semibold">70%</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-800 font-medium">Offline</p>
            <p className="text-2xl font-semibold">30%</p>
          </div>
        </div>
      </div>

      {/* Preferred Payment Methods */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800">Preferred Payment Methods</h2>
        <div className="mt-4 space-y-3">
          <div className="flex justify-between">
            <span>Card</span>
            <span>50%</span>
          </div>
          <div className="flex justify-between">
            <span>Cash</span>
            <span>20%</span>
          </div>
          <div className="flex justify-between">
            <span>Wallets</span>
            <span>15%</span>
          </div>
          <div className="flex justify-between">
            <span>UPI</span>
            <span>15%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBehaviour;
