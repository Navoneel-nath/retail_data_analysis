import React, { useState } from 'react';
import { LineChart,BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import ShoppingBehaviour from './ShoppingBehaviour';
const mockCustomers = [
  { id: 1, name: 'John Doe', totalSpent: 1200, purchases: 15 },
  { id: 2, name: 'Jane Smith', totalSpent: 1100, purchases: 12 },
  { id: 3, name: 'Michael Brown', totalSpent: 950, purchases: 10 },
];

const spendingByAge = [
  { ageGroup: '18-25', value: 30 },
  { ageGroup: '26-35', value: 40 },
  { ageGroup: '36-50', value: 20 },
  { ageGroup: '50+', value: 10 },
];

const customerSegments = [
  { type: 'New', value: 25 },
  { type: 'Loyal', value: 40 },
  { type: 'High-Spenders', value: 20 },
  { type: 'Discount Shoppers', value: 15 },
];

const churnAnalysis = [
  { days: '30+', count: 20 },
  { days: '60+', count: 15 },
  { days: '90+', count: 10 },
];

const avgCustomerSpend = [
  { month: 'Jan', value: 200 },
  { month: 'Feb', value: 220 },
  { month: 'Mar', value: 210 },
  { month: 'Apr', value: 230 },
];

const retentionRate = [
  { type: 'Repeat Shoppers', value: 70 },
  { type: 'One-time Shoppers', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomerInsights = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Customer Insights</h2>
      
      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg mb-3">Most Valuable Customers</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Customer</th>
              <th className="p-2">Total Spent ($)</th>
              <th className="p-2">Purchases</th>
            </tr>
          </thead>
          <tbody>
            {mockCustomers.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="p-2">{customer.name}</td>
                <td className="p-2">${customer.totalSpent}</td>
                <td className="p-2">{customer.purchases}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg mb-3">Customer Segmentation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={customerSegments} dataKey="value" nameKey="type" cx="50%" cy="50%" outerRadius={100}>
              {customerSegments.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg mb-3">Average Customer Spend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={avgCustomerSpend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg mb-3">Customer Retention Rate</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={retentionRate} dataKey="value" nameKey="type" cx="50%" cy="50%" outerRadius={100}>
              {retentionRate.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Spending by Age Pie Chart */}
      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg mb-3">Spending by Age</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={spendingByAge} dataKey="value" nameKey="ageGroup" cx="50%" cy="50%" outerRadius={100}>
              {spendingByAge.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg mb-3">Churn Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={churnAnalysis}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="days" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    <ShoppingBehaviour/>
    </div>
  );
};


export default CustomerInsights