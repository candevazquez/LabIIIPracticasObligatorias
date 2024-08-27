import React from "react";

const Table = ({ information }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Ingresos</th>
          </tr>
        </thead>

        <tbody>
          {information.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>${item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
