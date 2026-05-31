import { useState } from "react";

function ListBasics() {
  const [fruits] = useState([
    "Táo",
    "Chuối",
    "Cam",
    "Nho"
  ]);

  return (
    <div>
      <h2>Danh sách trái cây</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListBasics;