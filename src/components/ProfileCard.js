import React from 'react';

function ProfileCard({ name, role, image }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '20px auto',
      width: '250px',
      textAlign: 'center',
      background: '#DFFF00',
    }}>
      <img
        src={image}
        alt={`${name}'s profile`}
        style={{ width: '100px', borderRadius: '50%' }}
      />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default ProfileCard;
