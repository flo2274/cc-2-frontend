import { useState } from "react";

function EditForm({ item, updateItem, setEditingItem }) {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(item.id, name, description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Beschreibung"
      />
      <button type="submit">Aktualisieren</button>
      <button type="button" onClick={() => setEditingItem(null)}>
        Abbrechen
      </button>
    </form>
  );
}

export default EditForm;
