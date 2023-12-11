import React from 'react';

const patientsPage = () => {
  const patients = [
    {
        patientId: 'Patient_1',
        patientName: 'Patient',
        contactDetails: 'Faisalabad',
        medicalHistory: 'Previous surgery in 2018'
    },
    {
        patientId: 'Patient_2',
        patientName: 'Patient New',
        contactDetails: 'Lahore',
        medicalHistory: 'New Patient'
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300 text-blue-500 text-center font-bold">Patient ID</th>
            <th className="py-2 px-4 border-b border-gray-300 text-blue-500 text-center font-bold">Patient Name</th>
            <th className="py-2 px-4 border-b border-gray-300 text-blue-500 text-center font-bold">Contact Details</th>
            <th className="py-2 px-4 border-b border-gray-300 text-blue-500 text-center font-bold">Medical History</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="py-2 px-4 border-b border-gray-300 text-green-500 text-center font-bold">{patient.patientId}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-green-500 text-center font-bold">{patient.patientName}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-green-500 text-center font-bold">{patient.contactDetails}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-green-500 text-center font-bold">{patient.medicalHistory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default patientsPage;
