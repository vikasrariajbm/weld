import React from "react";

export default function Stats({ title, value }) {
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <div className="label_container">{title}</div>
      <div className="row mt-2">
        <div className="col-sm-10">
          <div
            style={{
              border: "0.1px solid gray",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                width: `${value}%`,
                height: "10px",
                borderRadius: "20px",
                border: "1px solid white",
                backgroundColor: value >= 50 ? "green" : "skyBlue",
                textAlign: "center",
                lineHeight: "10px",
              }}
            ></div>
          </div>
        </div>
        <div
          className="col-sm-2"
          style={{ fontSize: "15px", fontWeight: "600", color: "black" }}
        >{`${value}%`}</div>
      </div>
    </div>
  );
}
