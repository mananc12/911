import React, { useState } from 'react';
import PersonalInfoStep from '../components/PersonalInfoStep';
import MedicalInfoStep from '../components/MedicalInfoStep';
import EmergencyContactStep from '../components/EmergencyContactStep';
import ReviewStep from '../components/ReviewStep';

const OnboardingPage = () => {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const [medicalInfo, setMedicalInfo] = useState({
    allergies: '',
    medications: '',
    conditions: ''
  });
  const [emergencyContact, setEmergencyContact] = useState({
    name: '',
    phoneNumber: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handlePersonalInfoSubmit = (data) => {
    setPersonalInfo(data);
    handleNextStep();
  };

  const handleMedicalInfoSubmit = (data) => {
    setMedicalInfo(data);
    handleNextStep();
  };

  const handleEmergencyContactSubmit = (data) => {
    setEmergencyContact(data);
    handleNextStep();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoStep
            data={personalInfo}
            onSubmit={handlePersonalInfoSubmit}
          />
        );
      case 2:
        return (
          <MedicalInfoStep
            data={medicalInfo}
            onSubmit={handleMedicalInfoSubmit}
          />
        );
      case 3:
        return (
          <EmergencyContactStep
            data={emergencyContact}
            onSubmit={handleEmergencyContactSubmit}
          />
        );
      case 4:
        return (
          <ReviewStep
            personalInfo={personalInfo}
            medicalInfo={medicalInfo}
            emergencyContact={emergencyContact}
            isEditing={isEditing}
            onEdit={handleEdit}
            onSave={handleSave}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-box">
      {renderStep()}
      {step > 1 && (
        <button className='pre-butn' onClick={handlePreviousStep}>Previous</button>
      )}
      
    </div>
  );
};

export default OnboardingPage;
