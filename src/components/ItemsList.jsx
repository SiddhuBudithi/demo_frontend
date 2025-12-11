import React, { useEffect, useState } from "react";
import {
  getItems,
  deleteItem,
  createItem,
  updateItem,
} from "../services/api";
import ItemForm from "./ItemForm";

export default function ItemsList() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const refresh = () => {
    getItems().then((res) => setItems(res.data));
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleDelete = (id) => {
    deleteItem(id).then(refresh);
  };

  const handleSave = (data) => {
    if (editingItem) {
      updateItem(editingItem.id, data).then(() => {
        setEditingItem(null);
        refresh();
      });
    } else {
      createItem(data).then(refresh);
    }
  };

  return (
    <div>
      <h1>Items</h1>

      <ItemForm onSubmit={handleSave} editingItem={editingItem} />

      <table className="table">
        <thead>
          <tr>
            <th>Name</th><th>Price</th><th>Category</th><th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => setEditingItem(item)}>Edit</button>
                <button className="danger" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}