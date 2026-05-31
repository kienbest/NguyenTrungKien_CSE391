import { useState } from "react";

function StringState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <input
        placeholder="Nhập tên"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        placeholder="Nhập email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <h3>Tên: {name}</h3>

      <h3>Email: {email}</h3>

      <p>
        Ký tự đã nhập:
        {name.length}/100
      </p>

      <p>
        {email.includes("@")
          ? "✅ Email hợp lệ"
          : "❌ Email chưa hợp lệ"}
      </p>
    </div>
  );
}

export default StringState;