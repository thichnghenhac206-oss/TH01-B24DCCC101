import React, { useState, useEffect } from "react";
import "./bai2.css";

export default function TrafficLight() {
  const [light, setLight] = useState("red");

  // Hàm đổi đèn thủ công
  const nextLight = () => {
    if (light === "red") setLight("green");
    else if (light === "green") setLight("yellow");
    else setLight("red");
  };

  // Chạy tự động mỗi 2s đổi đèn
  useEffect(() => {
    const interval = setInterval(() => {
      nextLight();
    }, 2000);

    return () => clearInterval(interval); // clear khi unmount
  });

  return (
    <div className="traffic-container">
      <div className={`light red ${light === "red" ? "active" : ""}`}></div>
      <div className={`light yellow ${light === "yellow" ? "active" : ""}`}></div>
      <div className={`light green ${light === "green" ? "active" : ""}`}></div>

      <button onClick={nextLight} className="btn-change">
        Chuyển đèn
      </button>
    </div>
  );
}
