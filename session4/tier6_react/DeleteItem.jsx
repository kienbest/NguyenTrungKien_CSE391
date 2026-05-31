import { useState } from "react";

function DeleteItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Minh" },
    { id: 2, name: "An" },
    { id: 3, name: "Linh" }
  ]);

  function handleDelete(id) {
    setItems(
      items.filter(item => item.id !== id)
    );
  }

  return (
    <div>
      <h2>Xóa sinh viên</h2>

      {items.map(item => (
        <div key={item.id}>
          {item.name}

          <button
            onClick={() => handleDelete(item.id)}
          >
            Xóa
          </button>
        </div>
      ))}
    </div>
  );
}

export default DeleteItem;