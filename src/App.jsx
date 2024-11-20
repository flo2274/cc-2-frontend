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
    <div className="App bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-3xl font-bold text-center">Aufgabenliste</h1>
      </header>
      <main className="container mx-auto py-8 px-4">
        <InputForm addItem={addItem} />
        <div className="mt-6">
          <ItemList
            items={data}
            onEdit={setEditingItem}
            onDelete={deleteItem}
          />
        </div>
        {editingItem && (
          <div className="mt-6">
            <EditForm
              item={editingItem}
              updateItem={updateItem}
              setEditingItem={setEditingItem}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
