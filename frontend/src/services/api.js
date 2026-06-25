import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/tickets",

});

export const getTickets = () => API.get("/");
export const createTicket = (data) => API.post("/", data);
export const updateTicket = (id, data) => API.put(`/${id}`, data);
export const deleteTicket = (id) => API.delete(`/${id}`);