import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './landingPage/LandingPage'
import AboutPage from './aboutPage/AboutPage'
import MenuPage from './menuPage/MenuPage'
import TimingPage from './timingPage/TimingPage'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx';
import ContactusPage from './contactusPage/ContactusPage'
export default function Index () {
  return (
    
<BrowserRouter>
<Header />
<Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="AboutPage" element={<AboutPage />} />
          <Route path="MenuPage" element={<MenuPage />} />
          <Route path="TimingPage" element={<TimingPage />} />
          <Route path="ContactUsPage" element={<ContactusPage />} />

</Routes>
<Footer />
</BrowserRouter>

  )
}
