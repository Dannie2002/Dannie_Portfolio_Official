import React, { useState } from 'react'
import {Routes, Route, Router } from "react-router";
import {motion, AnimatePresence, backInOut} from 'framer-motion'
import contact from './assets/Contact1.jpg'
import branding from './assets/WorkExp.jpg'
import { ArrowRight,ArrowUpRight, SplinePointer, ChevronDown } from 'lucide-react'
import noise from './assets/noise.png'
import { FlipWords } from './Components/FlipWords'
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


    const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -80 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.75, ease: "easeInOut" }
    },
  };
  



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
