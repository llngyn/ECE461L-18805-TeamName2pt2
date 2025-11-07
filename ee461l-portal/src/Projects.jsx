import React from "react";

/**
 * Clean, line-by-line formatted project display.
 * Matches the rest of your dashboard card aesthetic.
 */
export default function Projects({ projects }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Projects</h3>

      {projects.length === 0 ? (
        <p className="text-sm text-gray-600">
          You’re not a member of any projects yet. Create one or join by ID.
        </p>
      ) : (
        projects.map((proj) => (
          <div
            key={proj.id}
            className="rounded-2xl border border-gray-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 hover:shadow-md transition-all duration-200"
          >
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              {proj.name || "Project Name"}
            </h4>

            <div className="space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-medium text-gray-600">ID:</span>{" "}
                {proj.id || "—"}
              </p>
              <p>
                <span className="font-medium text-gray-600">Members:</span>{" "}
                {proj.members?.length || 0}
              </p>
              <p>
                <span className="font-medium text-gray-600">
                  Project Description:
                </span>{" "}
                {proj.description || "No description provided."}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}