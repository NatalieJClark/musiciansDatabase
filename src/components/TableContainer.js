import React from "react";
import "./TableContainer.css";
const TableContainer = ({ musicians }) => (
  <div className="Table-Container">
    <table
      style={{
        width: "100%",
      }}
    >
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Genre</th>
        <th>Producer</th>
      </tr>
      {musicians.map((musician) => (
        <tr>
          <td>{musician.firstName}</td>
          <td>{musician.lastName}</td>
          <td>{musician.genre}</td>
          <td>{musician.producer}</td>
        </tr>
      ))}
    </table>
  </div>
);

export default TableContainer;
