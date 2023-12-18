import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="loading-screen" style={{ zIndex: "9999" }}>
      <div className="loading-spinner"></div>
    </div>
  );
}
