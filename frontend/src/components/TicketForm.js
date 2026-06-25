import React, { useState } from "react";
import { createTicket } from "../services/api";

function TicketForm({ fetchTickets }) {
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    priority: "Normal",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.title || !form.description) {
      setError("All fields are required");
      return;
    }

    await createTicket(form);
    setForm({
      name: "",
      title: "",
      description: "",
      priority: "Normal",
    });

    setError("");
    fetchTickets();
  };

  return (
    <div>
      <h2>Create Ticket</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="title"
          placeholder="Ticket Title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        {/* PRIORITY DROPDOWN */}
        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>

        <button type="submit">Add Ticket</button>
      </form>
    </div>
  );
}

export default TicketForm;