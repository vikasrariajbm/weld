import React from "react";

export default function TitleBar({ titleValue }) {
  return (
    <div
      style={{
        width: "100%",
        padding: "5px 15px",
        color: "gray",
        fontSize: "15px",
        fontWeight: "800",
        letterSpacing: "0.6px",
        background: "#E7EEFE",
        borderTopLeftRadius: "13px",
        borderTopRightRadius: "13px",
      }}
    >
      {titleValue}
    </div>
  );
}
