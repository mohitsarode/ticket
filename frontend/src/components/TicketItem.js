import React from "react";
import { deleteTicket, updateTicket } from "../services/api";

function TicketItem({ ticket, fetchTickets }) {
  const handleDelete = async () => {
    await deleteTicket(ticket._id);
    fetchTickets();
  };

  const toggleStatus = async () => {
    const newStatus = ticket.status === "Open" ? "Closed" : "Open";
    await updateTicket(ticket._id, { status: newStatus });
    fetchTickets();
  };

  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p><b>Name:</b> {ticket.name}</p>
      <p>{ticket.description}</p>

      {/* PRIORITY DISPLAY */}
      <p>
        <b>Priority:</b>{" "}
        <span
          style={{
            color:
              ticket.priority === "High"
                ? "red"
                : ticket.priority === "Low"
                ? "green"
                : "orange",
          }}
        >
          {ticket.priority}
        </span>
      </p>

      <p>Status: {ticket.status}</p>

      <button onClick={toggleStatus}>Toggle Status</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TicketItem;