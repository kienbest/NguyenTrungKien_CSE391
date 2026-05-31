import { useState } from "react";

function FormEvents() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "") {
      alert("Vui lòng nhập tên");
      return;
    }

    setSubmitted(true);
  }

  return (
    <div>
      <h2>Form Events</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên"
          />

          <button type="submit">
            Gửi
          </button>
        </form>
      ) : (
        <h3>Xin chào {name}</h3>
      )}
    </div>
  );
}

export default FormEvents;