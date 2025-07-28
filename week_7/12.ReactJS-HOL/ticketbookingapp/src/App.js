import React, { useState } from 'react';
import Greeting from './components/Greeting';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import FlightDetails from './components/FlightDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let button = isLoggedIn ? (
    <LogoutButton onClick={handleLogout} />
  ) : (
    <LoginButton onClick={handleLogin} />
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>✈️ Ticket Booking App</h1>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
      <FlightDetails />
    </div>
  );
}

export default App;
