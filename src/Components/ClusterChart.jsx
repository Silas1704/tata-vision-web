// src/components/ClusterChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { clusters } from '../assets/cluster';
import graph from '../assets/image.png';

const ClusterChart = () => {
  const data = [
    { name: 'Bad Clusters', count: clusters.badClusters.length },
    { name: 'Good Clusters', count: clusters.goodClusters.length },
  ];

  return (
    <div>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    <img src={graph} alt="Jaguar Car" className="h-auto p-5 block mx-auto max-w-full max-h-96 object-contain" />
    </div>
  );
};

export default ClusterChart;
