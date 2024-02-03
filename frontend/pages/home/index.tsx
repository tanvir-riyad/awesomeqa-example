import React, { useState, useEffect } from "react";
import Table from "../../components/table/table";
import axios from "axios";

const HomePage: React.FC = () => {
  const [tableData, setTableData] = useState([]);
  // const [idData, setiddata] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/tickets");
      setTableData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  const handleToggle = async (id: string) => {
    // Make API request to update the status
    try {
      await axios.put(`http://localhost:5001/update_ticket_status/${id}`);
      fetchData(); // Refetch data after updating
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  };

  const handleDelete = async (id: string) => {
    // Make API request to delete the ticket
    try {
      await axios.put(`http://localhost:5001/remove_ticket/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="cell">Message ID</th>
            <th className="cell">Status</th>
            <th className="cell">Resolved By</th>
            <th className="cell">Timestamp</th>
            <th className="cell">Context Messages</th>
            <th className="cell">Change Status</th>
            <th className="cell"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <Table
              key={row.id}
              row={row}
              onToggle={handleToggle}
              onDelete={handleDelete}
            ></Table>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
