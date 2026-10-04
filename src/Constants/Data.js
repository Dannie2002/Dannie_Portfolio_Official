import React from "react";
import servicedesk from "../assets/ServiceDesk3.jpg"
import Communication from "../SVGS/Communication.jsx";
import Management from "../SVGS/Management.jsx";
import AnalyticalThinking from "../SVGS/AnalyticalThinking.jsx";




const SdCards = [


  {
    title: "Incident Management",
    paragraph:
      "Log, categorise incidents and service requests in the ticketing system.",
      icon: Communication,
  },

  {
    title: "Communication & Coordination",
    paragraph:
      "From internal coordination, to provide clients incidents and request. ",
   icon: Communication,
  },

  {
    title: "Root Cause Analysis",
    paragraph:
      "Investigating underlying cause of incidents using diagostic tools.",
       icon: Management,
  },

  {
    title: "Analytical Thinking",
    paragraph:
      "Analyse network data and service alarms to guide effective resolutions.",
      icon: AnalyticalThinking,
  },

  {
    title: "SLA Compliance",
    paragraph:
      "Monitor service performance and follow up to maintain SLA commitments.",
      icon: Management,
  },

  {
    title: "Troubleshooting",
    paragraph:
      "From troubleshooting issues to ensuring system reliability.",
      icon: Management,
  },

  
];
export default SdCards;