import React, { useState } from 'react';

const EmergencyContactStep = ({ data, onSubmit }) => {
  const [name, setName] = useState(data.name);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, phoneNumber });
  };

  return (
    <div className='container-box'>
      <h3>Step 3: Emergency Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <label htmlFor="emergencyContactName" className={name ? 'active' : ''}>Name:</label>
          <input
            type="text"
            id="emergencyContactName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='input-box'>
          <label htmlFor="emergencyContactPhoneNumber" className={phoneNumber ? 'active' : ''}>Phone Number:</label>
          <input
            type="tel"
            id="emergencyContactPhoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button className='butn' type="submit">Next</button>
      </form>
    </div>
  );
};

export default EmergencyContactStep;
