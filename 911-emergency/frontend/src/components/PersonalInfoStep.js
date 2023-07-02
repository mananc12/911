import React, { useState } from 'react';

const PersonalInfoStep = ({ data, onSubmit }) => {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, phoneNumber });
  };

  return (
    <section>
    <div className='container-box'>
      <h3>Step 1: Personal Information</h3>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <label htmlFor="name" className={name ? 'active' : ''}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className='icon'><ion-icon name="accessibility"></ion-icon></span>
        </div>

        <div className='input-box'>
          <label htmlFor="email" className={email ? 'active' : ''}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className='icon'><ion-icon name="mail"></ion-icon></span>
        </div>

        <div className='input-box'>
          <label htmlFor="phoneNumber" className={phoneNumber ? 'active' : ''}>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <span className='icon'><ion-icon name="call"></ion-icon></span>
        </div>
        <button className='butn' type="submit">Next</button>
      </form>
    </div>
    </section>
  );
};

export default PersonalInfoStep;
