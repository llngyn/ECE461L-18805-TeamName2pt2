import React, { useState } from "react";

/**
 * Lightweight project summary card.
 * Used only for display inside the Projects list — no join/leave buttons.
 */
export default function ProjectCard({ name, members }) {
  const [hwSet1, setHwSet1] = useState(50);
  const [hwSet2, setHwSet2] = useState(0);
  const [qty, setQty] = useState("");

  const handleCheckIn = () => {
    const val = parseInt(qty) || 0;
    if (val <= 0) return;
    alert(`Checked in ${val} units (demo only).`);
    setHwSet1((prev) => Math.min(prev + val, 100));
    setQty("");
  };

  const handleCheckOut = () => {
    const val = parseInt(qty) || 0;
    if (val <= 0) return;
    alert(`Checked out ${val} units (demo only).`);
    setHwSet1((prev) => Math.max(prev - val, 0));
    setQty("");
  };

  return (
    <div className="border border-gray-200 bg-white rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-sm">
      {/* Project info */}
      <div>
        <h4 className="text-base font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">Members: {members}</p>
        <p className="text-sm text-gray-500 mt-1">
          HWSet1: {hwSet1}/100 | HWSet2: {hwSet2}/100
        </p>
      </div>

      {/* Demo-only hardware check-in/out */}
      <div className="flex items-center gap-2 mt-3 sm:mt-0">
        <input
          type="number"
          min="0"
          className="border border-gray-300 rounded-lg px-2 py-1 w-20 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="qty"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <button
          onClick={handleCheckIn}
          className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium"
        >
          Check In
        </button>
        <button
          onClick={handleCheckOut}
          className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium"
        >
          Check Out
        </button>
      </div>
    </div>
  );
}