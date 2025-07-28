import React from 'react';

const ListofPlayers = ({ players }) => {
  return (
    <div>
      {players.map((item, index) => (
        <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
      ))}
    </div>
  );
};

export const Scorebelow70 = ({ players }) => {
  const players70 = players.filter((p) => p.score <= 70);
  return (
    <div>
      {players70.map((item, index) => (
        <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
      ))}
    </div>
  );
};

export default ListofPlayers;
