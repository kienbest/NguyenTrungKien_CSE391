import { useState } from "react";

function InputEvents() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>Input Events</h2>

      <input
        value={text}
        onChange={handleChange}
        placeholder="Nhập gì đó..."
      />

      <p>Bạn nhập: {text}</p>
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}

export default InputEvents;