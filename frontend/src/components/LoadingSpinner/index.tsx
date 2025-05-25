import React from "react";
import "./style.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container h-[80vh]">
      <div className="spinner"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
