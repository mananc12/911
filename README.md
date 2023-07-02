# Medical Facilities Web Application

## Introduction
This is a web application built using React and Node.js that allows users to search for hospitals near their location and provides real-time medical facility availability information.

## Features

### Search Hospitals Page
- Displays an unfiltered list of medical facilities in a table view.
- Allows filtering of medical facilities based on name and area.
- Enables sorting of medical facilities based on name and area.

### Onboarding and Profile Page (Optional)
- Step-wise form for user onboarding and profile creation.
- First step collects basic personal information (e.g., name, email, phone number).
- Second step collects medical information (e.g., allergies, current medications, medical conditions).
- Third step collects contact information for at least one emergency contact.
- Fourth step allows users to review and confirm their information before completing the onboarding process.
- Saved information is displayed to the user with an edit button.

### API for Medical Facility Availability
- Retrieves real-time medical facility availability information.
- Allows clients to query for medical facilities by location (e.g., name, area).
- Returns a list of medical facilities in the specified location, including availability information such as the number of available beds and specialties offered.
- Data is stored in memory as part of the application.

## Setup Instructions

### Prerequisites
- Node.js
- npm

### Frontend Setup
1. Clone the repository:
git clone https://github.com/your-username/medical-facilities-web-app.git

2. Navigate to the `frontend` directory:
cd frontend

3. Install dependencies:
npm install

4. Start the React development server:
npm start

### Backend Setup (Option 1 - Node Server)
1. Navigate to the `backend` directory:
cd backend

2. Install dependencies:
npm install

3. Start the Node server:
npm start

### Backend Setup (Option 2 - API)
1. Implement the API endpoints as specified in the backend code.

2. Ensure the API is running and accessible.

## Technologies Used

### Frontend
- React
- HTML/CSS

### Backend (Option 1 - Node Server)
- Node.js
- Express.js
- MongoDB (optional)

### Backend (Option 2 - API)
- Node.js
- Express.js

## Contributing

Contributions are welcome! If you have any ideas or suggestions, please open an issue or submit a pull request.

