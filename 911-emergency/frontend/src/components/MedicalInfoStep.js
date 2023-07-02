import React, { useState } from 'react';

const MedicalInfoStep = ({ data, onSubmit }) => {
  const [allergies, setAllergies] = useState(data.allergies);
  const [medications, setMedications] = useState(data.medications);
  const [conditions, setConditions] = useState(data.conditions);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ allergies, medications, conditions });
  };

  return (
    <div className='container-box'>
      <h3>Step 2: Medical Information</h3>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <label htmlFor="allergies" className={allergies ? 'active' : ''}>Allergies:</label>
          <input
            type="text"
            id="allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
        </div>
        <div className='input-box'>
          <label htmlFor="medications" className={medications ? 'active' : ''}>Current Medications:</label>
          <input
            type="text"
            id="medications"
            value={medications}
            onChange={(e) => setMedications(e.target.value)}
          />
        </div>
        <div className='input-box'>
          <label htmlFor="conditions" className={conditions ? 'active' : ''}>Medical Conditions:</label>
          <input
            type="text"
            id="conditions"
            value={conditions}
            onChange={(e) => setConditions(e.target.value)}
          />
        </div>
        <button className='butn' type="submit">Next</button>
      </form>
    </div>
  );
};

export default MedicalInfoStep;
