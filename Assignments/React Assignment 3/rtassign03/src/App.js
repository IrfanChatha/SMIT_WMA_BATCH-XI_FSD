import React from 'react'
import Header from './components/Header'
import { Fragment } from 'react'
import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage.jsx'
import ServicesPage from './components/pages/ServicesPage.jsx'

function App() {
return (
<Fragment>
    <div>
 
    <Header />
   <LandingPage />
   <ServicesPage />
    <Footer />
  
    </div>
</Fragment>
  );
}

export default App;