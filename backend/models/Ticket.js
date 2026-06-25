const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Normal", "High"],
      default: "Normal",
    },
    status: {
      type: String,
      default: "Open",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);