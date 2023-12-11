"use client"
import React, { useEffect, useState } from 'react';
// import prisma from "@prisma/client"


const AppointmentsPage = () => {
  const appointments = [
    {
      appointmentId: 'Appointment_1',
      doctorId: 'Doctor_1',
      patientId: 'Patient_1',
      dateTime: '2023-12-31 10:00 AM',
      notes: 'Follow up appointment',
    },
    {
      appointmentId: 'Appointment_2',
      doctorId: 'Doctor_2',
      patientId: 'Patient_2',
      dateTime: '2023-12-31 9:00 AM',
      notes: 'New appointment',
    },
  ];


  // const [appointments, setAppointments] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // Fetch appointments data using Prisma
  //       const fetchedAppointments = await prisma.appointment.findMany(); // Adjust this based on your model name
  //       setAppointments(fetchedAppointments);
  //     } catch (error) {
  //       console.error('Error fetching appointments:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300 text-blue-500 text-center font-bold">Appointment ID</th>
            <th className="py-2 px-4 border-b border-gray-300 text-blue-500 text-center font-bold">Doctor ID</th>
            <th className="py-2 px-4 border-b border-gray-300 text-blue-500 text-center font-bold">Patient ID</th>
            <th className="py-2 px-4 border-b border-gray-300 text-blue-500 text-center font-bold">Date & Time</th>
            <th className="py-2 px-4 border-b border-gray-300 text-blue-500 text-center font-bold">Notes</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="py-2 px-4 border-b border-gray-300 text-green-500 text-center font-bold">{appointment.appointmentId}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-green-500 text-center font-bold">{appointment.doctorId}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-green-500 text-center font-bold">{appointment.patientId}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-green-500 text-center font-bold">{appointment.dateTime}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-green-500 text-center font-bold">{appointment.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsPage;