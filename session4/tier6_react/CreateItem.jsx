import { useState } from "react";

function CreateItem() {
  const [items, setItems] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" }
  ]);

  const [newName, setNewName] = useState("");

  function handleAdd() {
    if (newName.trim() === "") return;

    const newItem = {
      id: Date.now(),
      name: newName
    };

    setItems([...items, newItem]);
    setNewName("");
  }

  return (
    <div>
      <h2>Thêm môn học</h2>

      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <button onClick={handleAdd}>
        Thêm
      </button>

      {items.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default CreateItem;