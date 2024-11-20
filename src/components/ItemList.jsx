function ItemList({ items, onEdit, onDelete }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - {item.description}
          </span>
          <button onClick={() => onEdit(item)}>Bearbeiten</button>
          <button onClick={() => onDelete(item.id)}>Löschen</button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
