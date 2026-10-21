import { useEffect, useRef } from 'react'
import {Routes, Route, useLocation, useNavigate} from "react-router";
import MainHeader from './Components/MainHeader.jsx'
import Footer from './Components/Footer.jsx'
import Telecommunications from './Components/Telecommunications.jsx'
import ServiceDesk from './Components/ServiceDesk.jsx';
import ClientRelationship from './Components/ClientRelationship.jsx';
import WebsiteDevelopment from "./Components/WebsiteDevelopment.jsx";
import CoverPages from './Components/CoverPages.jsx';
import Whoisdan from './Components/Whoisdan.jsx';
import MouseDiv from './Components/MouseDiv.jsx';
import ContactMe from "./Components/ContactMe.jsx"
import ProgressBar from './Components/ProgressBar.jsx';
import MyGallery from './Components/MyGallery.jsx'
import NetworkArchitecture from './Components/NetworkArchitecture.jsx';
import ScrollToTopButton from './Components/ScrollToTopButton.jsx';
import Connectivity from './Components/Connectivity.jsx';
import NetworkOperations from './Components/NetworkOperations.jsx';
import TechnologyTools from './Components/TechnologyTools.jsx';
import ProjectDetails from "./Components/ProjectDetails.jsx";
import Transition from './Components/Transition.jsx';



function App() {

const location = useLocation();
const navigate = useNavigate();
const transitionRef = useRef(null);
const transitionPending = useRef(false);

useEffect(() => {
  const handleClick = async (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const anchor =
      event.target instanceof Element
        ? event.target.closest("a[data-discover]")
        : null;

    if (
      !anchor ||
      anchor.hasAttribute("download") ||
      (anchor.target && anchor.target.toLowerCase() !== "_self")
    ) {
      return;
    }

    const destination = new URL(anchor.href, window.location.href);

    if (
      destination.origin !== window.location.origin ||
      (destination.pathname === location.pathname &&
        destination.search === location.search)
    ) {
      return;
    }

    event.preventDefault();

    if (transitionPending.current) {
      return;
    }

    transitionPending.current = true;

    try {
      await transitionRef.current.animateOut();
      navigate(`${destination.pathname}${destination.search}${destination.hash}`);
      await new Promise((resolve) => requestAnimationFrame(resolve));
      await transitionRef.current.animateIn();
    } finally {
      transitionPending.current = false;
    }
  };

  document.addEventListener("click", handleClick, true);
  return () => document.removeEventListener("click", handleClick, true);
}, [location.pathname, location.search, navigate]);

  return (
 
    <>

    <Transition ref={transitionRef} />
    <MouseDiv />
    <ProgressBar />

    <MainHeader />
 
    <Routes location={location} key={location.pathname}>
      <Route index element={<CoverPages />} />
      <Route path="/telecommunications">

  {/* Main Telecommunications page */}
    <Route index element={<Telecommunications />} />

  {/* Expertise subsections */}
     <Route
       path="network-architecture"
      element={<NetworkArchitecture />}
  />

  <Route
    path="internet-connectivity"
    element={<Connectivity />}
  />
   <Route
    path="network-operations"
    element={<NetworkOperations />}
  />

   <Route
    path="technologies-tools"
    element={<TechnologyTools />}
  />

</Route>
      <Route path='/service-desk' element={<ServiceDesk />} />
      <Route path="/client-relationship-management" element={<ClientRelationship />} />
      <Route path="/website-design-development" element = {<WebsiteDevelopment />} />
      <Route path="/who-is-dan?" element = {<Whoisdan />} />
      <Route path='/contact-me' element ={<ContactMe />} />
      <Route path='/my-gallery' element = {<MyGallery />} />
      <Route path="/projects/:slug" element={<ProjectDetails />}/>
    </Routes>
  

    
     
    

<ScrollToTopButton />
<Footer />

    </>
  )
}

export default App