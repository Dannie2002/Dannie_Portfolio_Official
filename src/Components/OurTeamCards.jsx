import { useState } from "react";
import { motion } from "framer-motion";

import worker2 from "../assets/worker2.jpg";
import branding from "../assets/worker2.jpg";
import worker from "../assets/worker2.jpg";



// =====================================================
// TEAM INFORMATION
// =====================================================

const teamInfo = [
  {
    id: "team-member-1",
    fullname: "Blessme phiri",
    position: "Web designer & developer",
    // description intentionally omitted for now
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    image: worker2,
  },

  {
    id: "team-member-2",
    fullname: "Maneno Ziyaya",
    position: "Editor & sound engineer",
    description: "",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    image: branding,
  },

  {
    id: "team-member-3",
    fullname: "Dannie Mankhwazi",
    position: "Website designer & developer",
    description: "",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    image: worker,
  },

  {
    id: "team-member-4",
    fullname: "Innocent chibati",
    position: "Photographer & videographer.",
    description: "",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    image: worker,
  },
];


// =====================================================
// GRID STRUCTURE
// =====================================================
//
// These are NOT team members.
// They are special cards that belong to the layout.
//
// This allows us to keep "Our Team" and the arrow card
// without pretending that they are employees.
//

const teamGrid = [
  {
    type: "heading",
  },

  {
    type: "member",
    memberId: "team-member-1",
  },

  {
    type: "member",
    memberId: "team-member-2",
  },

  {
    type: "arrow",
  },

  {
    type: "member",
    memberId: "team-member-3",
  },

  {
    type: "member",
    memberId: "team-member-4",
  },
];


// =====================================================
// MEMBER CARD
// =====================================================

const TeamMemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      className="w-full lg:col-span-3 card_space"
    >
      <div className="relative h-[300px] lg:h-[360px] w-full   bg-(--primary-color)">
        <img
          src={member.image}
          alt={member.fullname}
          className="size-full  grayscale object-cover"
        />

        <motion.div
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            height: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          className="absolute overflow-hidden right-0 bottom-0 flex flex-col gap-2 p-2"
        >
          {member.socials?.facebook && (
            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <h2>Facebook</h2>
            </a>
          )}

          {member.socials?.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <h2>Instagram</h2>
            </a>
          )}

          {member.socials?.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <h2>LinkedIn</h2>
            </a>
          )}
        </motion.div>
      </div>

      <div className="flex mt-1 flex-col gap-2">
        <h4 className="card_heading leading-0 text-[18px]">
          {member.fullname}
        </h4>

        <h4 className="text_para text-[14px] dmsans">
          {member.position}
        </h4>

        {member.description && (
          <p className="text_para text-[13px] dmsans">
            {member.description}
          </p>
        )}
      </div>
    </div>
  );
};


// =====================================================
// MAIN COMPONENT
// =====================================================

const OurTeamCards = () => {
  return (
    <div className="w-full px-3 lg:mt-4 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

      {teamGrid.map((item, index) => {

        // ---------------------------------------------
        // OUR TEAM HEADING CARD
        // ---------------------------------------------

        if (item.type === "heading") {
          return (
            <div
              key={`heading-${index}`}
              className="lg:col-span-3 w-full flex flex-col start-start justify-start"
            >
              <div className="flex flex-col gap-1">
                <h2 className="dmsans uppercase text-[#ededed] font-medium text-[24px]">
                  Our
                </h2>

                <h2 className="dmsans leading-10 uppercase text-(--secondary-color) font-black text-[42px]">
                  Team
                </h2>
              </div>
            </div>
          );
        }


        // ---------------------------------------------
        // ARROW CARD
        // ---------------------------------------------

        if (item.type === "arrow") {
          return (
            <div
              key={`arrow-${index}`}
              className="lg:col-span-3 hidden lg:flex flex-col items-end justify-start"
            >
              <div className="flex justify-center items-center flex-col size-20 -bottom-15 -left-15 rounded-sm bg-(--secondary-color)">
                <svg
                  className="size-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 7L7 17M7 17H17M7 17V7"
                    stroke="#ededed"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p></p>
            </div>
          );
        }


        // ---------------------------------------------
        // MEMBER CARD
        // ---------------------------------------------

        if (item.type === "member") {
          const member = teamInfo.find(
            (person) => person.id === item.memberId
          );

          if (!member) return null;

          return (
            <TeamMemberCard
              key={member.id}
              member={member}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default OurTeamCards;