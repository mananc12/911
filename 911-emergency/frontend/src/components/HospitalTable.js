import React, { useEffect, useState } from 'react';

function HospitalTable({ filter, sortBy }) {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/hospitals')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching hospitals data');
        }
        return response.json();
      })
      .then((data) => {
        setHospitals(data);
      })
      .catch((error) => {
        console.log('Error fetching hospitals data:', error);
      });
  }, []);

  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.Name.toLowerCase().includes(filter.toLowerCase()) ||
      hospital.Area.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedHospitals = [...filteredHospitals].sort((a, b) => {
    if (sortBy === 'name') {
      return a.Name.localeCompare(b.Name);
    } else if (sortBy === 'area') {
      return a.Area.localeCompare(b.Area);
    } else {
      return 0;
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Area</th>
          <th>Type</th>
          <th>Beds</th>
          <th>Specialties</th>
        </tr>
      </thead>
      <tbody>
        {sortedHospitals.map((hospital, index) => (
          <tr key={index}>
            <td>{hospital.Name}</td>
            <td>{hospital.Address}</td>
            <td>{hospital.Area}</td>
            <td>{hospital.Type}</td>
            <td>{hospital.Beds}</td>
            <td>{hospital.Specialties}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HospitalTable;
