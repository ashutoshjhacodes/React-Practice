// src/Card.js
import React from 'react';

function Card({ user }) {
  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Website: {user.website}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default Card;

