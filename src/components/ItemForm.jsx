import React, { useEffect, useState } from "react";

export default function ItemForm({ onSubmit, editingItem }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    if (editingItem) {
      setForm(editingItem);
    } else {
      setForm({
        name: "",
        price: "",
        description: "",
        category: "",
      });
    }
  }, [editingItem]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="card">
      <h3>{editingItem ? "Edit Item" : "Add Item"}</h3>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />

        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} required type="number" />

        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />

        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />

        <button type="submit">
          {editingItem ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}