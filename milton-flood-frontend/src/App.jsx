import React from "react";
import FloodForm from "./components/FloodForm";
import FloodMap from "./components/FloodMap";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Milton Flood Reporting</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-start h-[70vh] overflow-hidden bg-white rounded-2xl shadow-lg p-4">
          <FloodForm />
        </div>
        <div className="flex flex-col justify-start h-[70vh] overflow-hidden bg-white rounded-2xl shadow-lg p-4">
          <FloodMap />
        </div>
      </div>
    </div>
  );
}

export default App;
