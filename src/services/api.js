import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// CRUD
export const getItems = () => API.get("/items/");
export const createItem = (data) => API.post("/items/", data);
export const updateItem = (id, data) => API.put(`/items/${id}/`, data);
export const deleteItem = (id) => API.delete(`/items/${id}/`);

// Reports
export const getCategoryReport = () => API.get("/report/categories/");

// External API
export const getGithubUser = (username) =>
  API.get(`/external/github/${username}/`);