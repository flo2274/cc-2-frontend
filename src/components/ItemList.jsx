function ItemList({ items, onEdit, onDelete }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white shadow-md rounded px-4 py-3"
        >
          <span className="text-gray-800 text-lg">
            <strong>{item.name}</strong> - {item.description}
          </span>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(item)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            >
              Bearbeiten
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            >
              Löschen
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
