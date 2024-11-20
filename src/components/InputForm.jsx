import { useState } from "react";

function InputForm({ addItem }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addItem(name, description);
      setName("");
      setDescription("");
    }
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
      <button type="submit">Hinzufügen</button>
    </form>
  );
}

export default InputForm;
