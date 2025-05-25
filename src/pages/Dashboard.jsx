// src/pages/Dashboard.tsx
import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 p-4 min-h-screen bg-gray-900 text-white">

      {/* Row 1 - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1 - Coin List */}
        <div className="bg-gray-800 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Supported Coins</h2>
          {/* Add coin list component here */}
        </div>

        {/* Column 2 - Price Chart */}
        <div className="bg-gray-800 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Live Price Chart</h2>
          {/* Add chart component here */}
        </div>

        {/* Column 3 - Create Bot Form */}
        <div className="bg-gray-800 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Create New Bot</h2>
          {/* Add form component here */}
        </div>
      </div>

      {/* Row 2 - Tabbed Table */}
      <div className="bg-gray-800 rounded-xl p-4 shadow mt-4">
        <h2 className="text-lg font-semibold mb-4">Bot Overview</h2>
        {/* Add tab component with Active Bots / Bot History */}
      </div>

    </div>
  );
}
