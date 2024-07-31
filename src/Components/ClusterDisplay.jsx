import React from 'react';
import { clusters } from '../assets/cluster';

const ClusterDisplay = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cluster Information</h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Bad Clusters</h3>
        <div className="space-y-4">
          {clusters.badClusters.map((cluster) => (
            <div key={cluster.id} className="p-4 bg-red-100 border-l-4 border-red-500">
              <p className="font-semibold">Cluster {cluster.id}:</p>
              <p>{cluster.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Good Clusters</h3>
        <div className="space-y-4">
          {clusters.goodClusters.map((cluster) => (
            <div key={cluster.id} className="p-4 bg-green-100 border-l-4 border-green-500">
              <p className="font-semibold">Cluster {cluster.id}:</p>
              <p>{cluster.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClusterDisplay;
