import { useState } from "react";

function BooleanState() {
  const [isVisible, setIsVisible] =
    useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() =>
          setIsVisible(!isVisible)
        }
      >
        {isVisible
          ? "Ẩn nội dung"
          : "Hiện nội dung"}
      </button>

      {isVisible && (
        <h3>Đây là nội dung</h3>
      )}
    </div>
  );
}

export default BooleanState;