import React from "react";

function FleetCard({ fleet, onUpdateDriver, onToggleAvailability, onDelete }) {
 
  if (!fleet) return null;

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p><b>Reg No:</b> {fleet.regNo}</p>
      <p><b>Category:</b> {fleet.category}</p>
      <p><b>Driver:</b> {fleet.driver}</p>
      <p><b>Status:</b> {fleet.available}</p>

      <button
        onClick={() => {
          const name = prompt("Enter new driver name");
          if (name && name.trim()) {
            onUpdateDriver(fleet.id, name);
          }
        }}
      >
        Update Driver
      </button>

      <button onClick={() => onToggleAvailability(fleet.id)}>
        Toggle Availability
      </button>

      <button onClick={() => onDelete(fleet.id)}>
        Delete
      </button>
    </div>
  );
}

export default React.memo(FleetCard);
