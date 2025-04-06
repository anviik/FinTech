import React, { useEffect, useState } from "react";
import "./Table.css";

function createRow(product, date, status) {
  return { product, date, status };
}

const staticRows = [
  createRow("Lasania Chicken Fri", "2 March 2022", "Increased"),
  createRow("Big Baza Bang", "2 March 2022", "Decreased"),
  createRow("Mouth Freshner", "2 March 2022", "Increased"),
  createRow("Cupcake", "2 March 2022", "Delivered"),
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Increased":
      return { backgroundColor: "#d4f5d0", color: "green" };
    case "Decreased":
      return { backgroundColor: "#f8d7da", color: "red" };
    case "Delivered":
      return { backgroundColor: "#cfe2ff", color: "blue" };
    default:
      return {};
  }
};

function RevenueDashboard() {
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/revenue")
      .then((response) => response.json())
      .then((data) => {
        setRevenue(data.revenue);
      })
      .catch((error) => console.error("Error fetching revenue:", error));
  }, []);

  return (
    <div className="dashboard">
      <h1>Company Stock Overview</h1>
      
      <div className="revenue-section">
        <h2>Revenue (Last 24 hours)</h2>
        <div className="revenue-amount">${revenue}</div>
      </div>

      <div className="table-section">
        <h2>Recent Stock Activity</h2>
        <table className="stock-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {staticRows.map((row, index) => (
              <tr key={index}>
                <td>{row.product}</td>
                <td>{row.date}</td>
                <td>
                  <span className="status-badge" style={getStatusStyle(row.status)}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RevenueDashboard;
