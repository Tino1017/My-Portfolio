import React from "react";

export const Design = ({ designProject }) => {
  return (
    <div className="text-sm">
      {designProject}
      <p className="mt-5 animate-bounce">Click next for <span className="text-secondary">More Projects</span></p>
    </div>
  );
};
