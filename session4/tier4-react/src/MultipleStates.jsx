import { useState } from "react";

function MultipleStates() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit() {
    if (
      age <= 0 ||
      age >= 100
    ) {
      alert("Tuổi không hợp lệ");
      return;
    }

    alert("Đăng ký thành công");
  }

  return (
    <div style={{ padding: "20px" }}>
      <input
        placeholder="Tên"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Tuổi"
        value={age}
        onChange={(e) =>
          setAge(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        Đăng ký
      </button>

      {name && (
        <h3>
          Xin chào {name}!
        </h3>
      )}
    </div>
  );
}

export default MultipleStates;