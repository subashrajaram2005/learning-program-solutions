import React from 'react';
import './App.css';
import officeImage from './assets/office.jpg';

function App() {
  // 1. JSX heading
  const heading = "Office Space";

  // 2. Office object
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  // 3. Office list
  const offices = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 70000, Address: "Bangalore" },
    { Name: "Regus", Rent: 60000, Address: "Hyderabad" },
    { Name: "Innov8", Rent: 45000, Address: "Delhi" }
  ];

  return (
    <div className="App">
      {/* Heading */}
      <h1>{heading}, at Affordable Range</h1>

      {/* Image */}
      <img src={officeImage} alt="Office Space" className="officeImage" />

      <hr />

      {/* Single Office Item */}
      <h2>Single Office Info:</h2>
      <h3>Name: {ItemName.Name}</h3>
      <h3 className={ItemName.Rent <= 60000 ? "textRed" : "textGreen"}>
        Rent: Rs. {ItemName.Rent}
      </h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr />

      {/* Loop of Office Items */}
      <h2>All Office Spaces</h2>
      {offices.map((item, index) => (
        <div key={index}>
          <h3>Name: {item.Name}</h3>
          <h3 className={item.Rent <= 60000 ? "textRed" : "textGreen"}>
            Rent: Rs. {item.Rent}
          </h3>
          <h3>Address: {item.Address}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
