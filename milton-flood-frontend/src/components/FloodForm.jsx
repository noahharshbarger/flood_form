import React, { useState } from "react";
import axios from "../../services/api";

export default function FloodForm() {
  const [address, setAddress] = useState("");
  const [severity, setSeverity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/reports", { address, severity, description });
    alert("Report submitted!");
    setAddress("");
    setSeverity(1);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Report Flood</h2>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        className="border p-2 mb-2 w-full"
      >
        {[1,2,3,4,5].map((s) => (
          <option key={s} value={s}>{s} - {["Minor","Moderate","Significant","Severe","Extreme"][s-1]}</option>
        ))}
      </select>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
