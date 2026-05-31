import { useState } from "react";

function UpdateItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Minh" },
    { id: 2, name: "An" }
  ]);

  function handleEdit(id) {
    setItems(
      items.map(item =>
        item.id === id
          ? {
              ...item,
              name: item.name + " (Đã sửa)"
            }
          : item
      )
    );
  }

  return (
    <div>
      <h2>Sửa thông tin</h2>

      {items.map(item => (
        <div key={item.id}>
          {item.name}

          <button
            onClick={() => handleEdit(item.id)}
          >
            Sửa
          </button>
        </div>
      ))}
    </div>
  );
}

export default UpdateItem;