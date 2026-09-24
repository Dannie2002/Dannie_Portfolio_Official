import React from 'react'
import {Routes, Route, Router } from "react-router";
import MainHeader from './Components/MainHeader.jsx'
import Footer from './Components/Footer.jsx'
import Telecommunications from './Components/Telecommunications.jsx'
import SectionHeader from './Components/SectionHeader.jsx'
import WorkExperience from './Components/WorkExperience.jsx'
import ScrollWords from './Components/ScrollWords.jsx'
import ServiceDesk from './Components/ServiceDesk.jsx';
import ClientRelationship from './Components/ClientRelationship.jsx';
import WebsiteDevelopment from "./Components/WebsiteDevelopment.jsx";
import CoverPages from './Components/CoverPages.jsx';
import Whoisdan from './Components/Whoisdan.jsx';
import MouseDiv from './Components/MouseDiv.jsx';
import ContactMe from "./Components/ContactMe.jsx"
import ProgressBar from './Components/ProgressBar.jsx';
import MyGallery from './Components/MyGallery.jsx'



function App() {


  return (
 
    <>
    <MouseDiv />
    <ProgressBar />

    <MainHeader />
    
    <Routes>
      <Route path="/" element={<CoverPages />} />
      <Route path="/telecommunications" element={<Telecommunications />} />
      <Route path='/service-desk' element={<ServiceDesk />} />
      <Route path="/client-relationship-management" element={<ClientRelationship />} />
      <Route path="/website-design-development" element = {<WebsiteDevelopment />} />
      <Route path="/who-is-dan?" element = {<Whoisdan />} />
      <Route path='/contact-me' element ={<ContactMe />} />
      <Route path='/my-gallery' element = {<MyGallery />} />
    </Routes>

    
     
    


<Footer />

    </>
  )
}

export default App
