import React, { useState } from "react";
import axios from "axios";

interface TableProps {
  row: {
    id: string;
    msg_id: string;
    status: string;
    resolved_by: string | null;
    timestamp: string;
    context_messages: string[];
  };
  onToggle: (msgId: string) => void;
  onDelete: (msgId: string) => void;
}

const Table: React.FC<TableProps> = ({ row, onToggle, onDelete }) => {
  const [status, setStatus] = useState(row.status);
  const handleToggleButton = (id: string) => {
    setStatus("closed");
    onToggle(id);
  };

  const firstElement = row.context_messages[0];
  const remainingElements = row.context_messages.slice(1).join(", ");
  return (
    <tr className="row">
      <td className="cell">{row.msg_id}</td>
      <td className="cell">{row.status}</td>
      <td className="cell">{row.resolved_by || "Null"}</td>
      <td className="cell">{row.timestamp}</td>
      <td className="cell">
        {" "}
        <div className="tooltip">
          {`${firstElement}, ...`}
          <span className="tooltip-text">{remainingElements}</span>
        </div>
      </td>
      <td className="cell">
        <button
          onClick={() => handleToggleButton(row.id)}
          disabled={status === "closed"}
        >
          {status === "open" ? "Close" : "Closed"}
        </button>
      </td>
      <td>
        <button onClick={() => onDelete(row.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Table;
