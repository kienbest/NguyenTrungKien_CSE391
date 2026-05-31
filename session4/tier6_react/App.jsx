import ListBasics from "./ListBasics";
import CreateItem from "./CreateItem";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

function App() {
  return (
    <>
      <ListBasics />
      <hr />

      <CreateItem />
      <hr />

      <DeleteItem />
      <hr />

      <UpdateItem />
    </>
  );
}

export default App;