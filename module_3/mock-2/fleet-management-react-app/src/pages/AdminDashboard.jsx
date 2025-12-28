import { useState, useCallback } from "react";
import FleetCard from "../components/FleetCard";

export default function AdminDashboard() {
  const [fleets, setFleets] = useState([]);

  const [form, setForm] = useState({
    regNo: "",
    category: "",
    driver: "",
    available: "Available",
  });

  const addFleet = () => {
    if (!form.regNo || !form.category || !form.driver) {
      alert("All fields required");
      return;
    }

    setFleets((prev) => [
      ...prev,
      { ...form, id: Date.now() },
    ]);

    setForm({
      regNo: "",
      category: "",
      driver: "",
      available: "Available",
    });
  };

  
  const updateDriver = useCallback((id, driver) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, driver } : f
      )
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              available:
                f.available === "Available"
                  ? "Unavailable"
                  : "Available",
            }
          : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (window.confirm("Are you sure?")) {
      setFleets((prev) =>
        prev.filter((f) => f.id !== id)
      );
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>

      {/* ADD FLEET */}
      <input
        placeholder="Reg No"
        value={form.regNo}
        onChange={(e) =>
          setForm({ ...form, regNo: e.target.value })
        }
      />

      <select
  value={form.category}
  onChange={(e) =>
    setForm({ ...form, category: e.target.value })
  }
>
  <option value="">Select Category</option>
  <option value="Car">Car</option>
  <option value="Bus">Bus</option>
  <option value="Truck">Truck</option>
  <option value="Auto">Auto</option>
</select>

      <input
        placeholder="Driver"
        value={form.driver}
        onChange={(e) =>
          setForm({ ...form, driver: e.target.value })
        }
      />

      <button onClick={addFleet}>Add Fleet</button>

      <hr />

      {/* DISPLAY FLEET */}
      {fleets.length === 0 ? (
        <p>No fleet added yet</p>
      ) : (
        fleets.map((fleet) => (
          <FleetCard
            key={fleet.id}
            fleet={fleet}
            onUpdateDriver={updateDriver}
            onToggleAvailability={toggleAvailability}
            onDelete={deleteFleet}
          />
        ))
      )}
    </div>
  );
}
