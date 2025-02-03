import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';



const storePerformance = [
  { store: 'Store 1', revenue: 50000, customers: 1200 },
  { store: 'Store 2', revenue: 42000, customers: 1100 },
];

const footfallAnalysis = [
  { store: 'Store 1', footfall: 300 },
  { store: 'Store 2', footfall: 250 },
];

const geoTargetedSales = [
  { region: 'North', sales: 20000 },
  { region: 'South', sales: 15000 },
];

// const storeExpansionSuggestions = [
//   { location: 'City A', potential: 'High' },
//   { location: 'City B', potential: 'Medium' },
// ];

const storeExpansionSuggestions = [
  { location: 'City A', potential: 80 },
  { location: 'City B', potential: 60 },
  { location: 'City C', potential: 45 },
  { location: 'City D', potential: 70 },
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LocationInsights = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Location Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg mb-3">Store-Wise Performance Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={storePerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="store" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg mb-3">Footfall Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={footfallAnalysis} dataKey="footfall" nameKey="store" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label>
              {footfallAnalysis.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg mb-3">Geo-Targeted Sales Data</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={geoTargetedSales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg mb-6">
        <h3 className="text-lg mb-3">Potential Store Expansion Suggestions</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={storeExpansionSuggestions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="location" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="potential" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
  );
};

export default LocationInsights