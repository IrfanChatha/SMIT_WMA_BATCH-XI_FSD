"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const AppointmentsPage = dynamic(() => import('./appointmentsPage/page'));
const PatientsPage = dynamic(() => import('./patientsPage/page'));

function DoctorsPage() {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    console.log('Client-side logic executed');
  }, []);

  return (
    <div className="flex h-screen">
      <aside className="bg-gray-600 text-white w-64 p-4">
        <h1 className="text-2xl font-bold mb-4">Appointment System</h1>
        <ul className="space-y-2">
          <li>
          <Link href="#" passHref>
  <div onClick={() => handlePageChange('appointmentsPage')} className="cursor-pointer text-blue-300 hover:text-white">
    Appointments</div>
</Link>
          </li>
          <li>
          <Link href="#" passHref>
  <div onClick={() => handlePageChange('patientsPage')} className="cursor-pointer text-blue-300 hover:text-white">
    Patients
  </div>
</Link>
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-4">
        <header className="text-3xl font-bold mb-8">Doctors Page</header>
        {currentPage === 'appointmentsPage' && <AppointmentsPage />}
        {currentPage === 'patientsPage' && <PatientsPage />}
      </main>
    </div>
  );
}

export default DoctorsPage;
