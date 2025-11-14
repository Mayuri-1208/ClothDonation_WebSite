import React, { useState, useEffect } from "react";
import "./Ngos.css";

function Ngos() {
  const [ngos, setNgos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/ngos.json")
      .then((res) => res.json())
      .then((data) => setNgos(data.ngos))
      .catch((err) => console.error("Error loading NGOs:", err));
  }, []);

  const filteredNgos = ngos.filter(
    (ngo) =>
      ngo.name.toLowerCase().includes(search.toLowerCase()) ||
      ngo.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ngo-container">
      <h1>Find Cloth Donation NGOs</h1>

      <input
        type="text"
        placeholder="Search NGO by name or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {filteredNgos.length > 0 ? (
        <div className="ngo-cards">
          {filteredNgos.map((ngo) => (
            <div key={ngo.id} className="ngo-card">
              <img src={ngo.image} alt={ngo.name} />
              <h3>{ngo.name}</h3>
              <p>{ngo.location}</p>
              <p>📞 {ngo.contact}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No NGOs found</p>
      )}
    </div>
  );
}

export default Ngos;
