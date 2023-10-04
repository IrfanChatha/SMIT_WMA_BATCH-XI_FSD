import React from 'react'
import Header from './components/Header'
import { Fragment } from 'react'
import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage.jsx'

function App() {
return (
<Fragment>
    <div>
 
    <Header />
   <LandingPage />
    <Footer />
  
    </div>
</Fragment>
  );
}

export default App;