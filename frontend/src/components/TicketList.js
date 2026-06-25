import React from "react";
import TicketItem from "./TicketItem";

function TicketList({ tickets, fetchTickets }) {
  return (
    <div>
      {tickets.length === 0 ? (
        <p>No tickets found</p>
      ) : (
        tickets.map((t) => (
          <TicketItem key={t._id} ticket={t} fetchTickets={fetchTickets} />
        ))
      )}
    </div>
  );
}

export default TicketList;