import React from 'react';

const ReviewStep = ({
  personalInfo,
  medicalInfo,
  emergencyContact,
  isEditing,
  onEdit,
  onSave
}) => {
  const handleEdit = () => {
    onEdit();
  };

  const handleSave = () => {
    onSave();
  };

  return (
    <div className='container-box2'>
      <h3>Step 4: Review and Confirm</h3>
      <div>
        <h4>Personal Information</h4>
        <p className='input-box'>Name: {personalInfo.name}</p>
        <p className='input-box'>Email: {personalInfo.email}</p>
        <p className='input-box'>Phone Number: {personalInfo.phoneNumber}</p>
      </div>
      <div>
        <h4>Medical Information</h4>
        <p className='input-box'>Allergies: {medicalInfo.allergies}</p>
        <p className='input-box'>Current Medications: {medicalInfo.medications}</p>
        <p className='input-box'>Medical Conditions: {medicalInfo.conditions}</p>
      </div>
      <div>
        <h4>Emergency Contact</h4>
        <p className='input-box'>Name: {emergencyContact.name}</p>
        <p className='input-box'>Phone Number: {emergencyContact.phoneNumber}</p>
      </div>
      {isEditing ? (
        <button className='butn' onClick={handleSave}>Save</button>
      ) : (
        <button className='butn' onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

export default ReviewStep;
