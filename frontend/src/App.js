import React, { useEffect, useState } from "react";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import { getTickets } from "./services/api";
import "./styles/styles.css";

function App() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    const res = await getTickets();
    setTickets(res.data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <h1>Ticket Management System</h1>
      <TicketForm fetchTickets={fetchTickets} />
      <TicketList tickets={tickets} fetchTickets={fetchTickets} />
    </div>
  );
}

export default App;