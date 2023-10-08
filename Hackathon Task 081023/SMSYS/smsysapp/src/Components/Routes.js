import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import StudentPage from './StudentPage/StudentPage'
import CoursesPage from './CoursesPage/CoursesPage'
import AttendancePage from './AttendancePage/AttendancePage'
export default function Index () {
  return (

<BrowserRouter>
<Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="StudentPage" element={<StudentPage />} />
          <Route path="CoursesPage" element={<CoursesPage />} />
          <Route path="AttendancePage" element={<AttendancePage />} />
          <Route path="*" element={<h2>Sorry! Page Not Found!!</h2>} />
</Routes>
</BrowserRouter>

  )
}
