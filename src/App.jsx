import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./components/ItemList";
import InputForm from "./components/InputForm";
import EditForm from "./components/EditForm";

function App() {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:2000/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addItem = (name, description) => {
    axios
      .post("http://localhost:2000/data", { name, description })
      .then((response) => setData([...data, response.data]))
      .catch((error) => console.error("Error adding item:", error));
  };

  const updateItem = (id, name, description) => {
    axios
      .put(`http://localhost:2000/data/${id}`, { name, description })
      .then(() => {
        setData(
          data.map((item) =>
            item.id === id ? { ...item, name, description } : item
          )
        );
        setEditingItem(null);
      })
      .catch((error) => console.error("Error updating item:", error));
  };

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:2000/data/${id}`)
      .then(() => setData(data.filter((item) => item.id !== id)))
      .catch((error) => console.error("Error deleting item:", error));
  };

  return (
    <div className="App">
      <h1>Aufgabenliste</h1>
      <InputForm addItem={addItem} />
      <ItemList items={data} onEdit={setEditingItem} onDelete={deleteItem} />
      {editingItem && (
        <EditForm
          item={editingItem}
          updateItem={updateItem}
          setEditingItem={setEditingItem}
        />
      )}
    </div>
  );
}

export default App;
