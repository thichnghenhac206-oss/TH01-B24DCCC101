import React, { useState } from "react";
import "./TextCounter.css";

function TextCounter() {
  const [text, setText] = useState("");

  return (
    <div className="text-counter">
      <h2>Bộ đếm ký tự</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập văn bản..."
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}

export default TextCounter;
