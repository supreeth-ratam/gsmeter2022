import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import { SectionHeader, SubHeader, Points } from "./MainContent";
import Title from "../Title/Title";

function TechnicalPage() {
  return (
    <div className="container--main">
      <Title lastUpdated={"02/02/2023"}>GSTA Meter</Title>
      <ImageContainer
        name={"Aniket Agrawal"}
        manlink={
          "https://drive.google.com/drive/folders/1WId3MhG6sZo0XGrM3NG0b79_cglhM340"
        }
        imgsrc={"/aniket.png"}
        chartsrc={"/tech.png"}
        por={"General Secretary Technical Affairs"}
        completed={52.94}
        notstarted={14.71}
        ongoing={32.35}
        unclear={0}
      />
      <Indicator />
      <SectionHeader>TINKERERS’ LABORATORY</SectionHeader>
      <Points>
        <RP>
          Work on the establishment of the <strong>MakerSpace course</strong> ,
          an extension of Tinkering Bootcamp, in the academic curriculum by
          formalizing the course content and logistics
        </RP>
        <OP
          reply={
            "Budget Proposal has been created. Some equipment has been bought some is left. Plan shown to alums, budget rest procurement and maintenance to be approved by the alums, already discussed with them."
          }
        >
          Facilitate Tinkerers’ laboratory as a <strong>fabrication hub</strong>{" "}
          for institute-wide technical activities
        </OP>
        <RP>
          <strong>ChemE TL:</strong> Establish infrastructure by setting up
          basic machinery, materials, chemical tools & equipment, as well as
          employing a technician and organizing training sessions
        </RP>
      </Points>
      <SectionHeader>TECHNICAL PROJECTS</SectionHeader>
      <Points>
        <OP
          reply={
            "Portal is ready, currently in the internal testing stage by the council. Planned to release before end of 2022."
          }
        >
          <strong>Project Portal:</strong> Launch a project portal consolidating
          projects from various channels such as clubs, professors, institute
          alumni funded projects, and numerous nation-wide competitions
        </OP>
        <RP>
          <strong>Technovation:</strong> Integrating design thinking
          methodologies like empathy-building and problem definition prior to
          prototyping and testing, involving faculty advisor to supplement
          evaluation
        </RP>
        <RP>
          Collaborate with industries to bring sponsored{" "}
          <strong>industrial problem statements</strong> during summer
        </RP>
      </Points>
      <SectionHeader>TECHNICAL RESOURCES</SectionHeader>
      <SubHeader>InstiWiki:</SubHeader>
      <Points>
        <WP
          reply={
            "PoC list documented waiting for Gymkhana server to be working. Community Conversations idea in internal brainstorming and ideation stage, will not be able to implement it completely over the current tenure."
          }
        >
          Expanding InstiWiki by adding tutorial links and a PoC list for
          various domains of expertise, channeling{" "}
          <strong>community conversations</strong> to make it more transparent
          and easily accessible
        </WP>
        <OP
          reply={
            "Documentation for PoC and available lab equipments done. Haven't been updated on the website as the InstiWiki server is down due to shifting of the Gymkhana server. When that is done these documentation will be updated asap."
          }
        >
          Document institute’s available lab equipment and resources, as well as{" "}
          <strong>“how-to-access”</strong> them
        </OP>
        <WP
          reply={
            "Work on this hasn't been started yet, just some initial discussion with vendors done. Due to other primary concerns and ideas any significant progress hasn't been made yet on this."
          }
        >
          Encourage the manufacturing of technical products through vendors to
          be <strong>affiliated with ITC</strong> , thereby reaping various
          benefits like <strong>discounts and coupons</strong>
        </WP>
        <OP
          reply={
            "Mentors decided, mentee registration done. Allotment to be released very soon and engagement planned."
          }
        >
          Assign <strong>tech mentors</strong> similar to the concept of ISMP
          mentors catering to the need of freshers
        </OP>
      </Points>
      <SectionHeader>TECH TEAMS</SectionHeader>
      <Points>
        <OP
          reply={
         
            <>
              Orientations for tech teams have been conducted
            </>
          }
        >
          <strong>Tech Team Workshops:</strong> Conduct hands-on sessions based
          on the theme of tech-teams’ keynotes, which further may be leveraged
          for their recruitment process
        </OP>
        <OP
          reply={
            "Documentation of some processes done, improvements for smoothening the process identified and proposed to the administration. There are still processes for which documentation is still a work in progress"
          }
        >
          Documenting the <strong>administrative processes</strong> involved in
          tech teams to speed up their work
        </OP>
      </Points>
      <SectionHeader>TECH FOR INSTI</SectionHeader>
      <Points>
        <OP
          reply={
            "Permissions and basic model sorted and showcased to Deans & Director. Swimming pool model deployed, feedback needs to be incorporated. Ongoing work of up-scalling the hardware work required for digitization."
          }
        >
          <strong>Digitizing Insti:</strong> Extend the idea of mess
          digitization for other use cases such as the entry & exit system of
          TL, reading hall, inter-hostel entries, and issuing of keys
        </OP>
        <OP
          reply={
            <>
              prototype done, deployment maybe by end of semester</>
          }
        >
          <strong>Washing machine:</strong> Push for the digitization of queue
          management system of hostel washing machines
        </OP>
      </Points>
      <SectionHeader>CLUBS</SectionHeader>
      <Points>
        <RP>
          Organize a <strong>convener camp</strong> with lukkha sessions to
          engage conveners in enjoyable activities while strengthening bonds and
          honing their non-technical skills.
        </RP>
        <WP
          reply={
            <>
              Club orientations done</>
          }
        >
          Conduct a <strong>tech fun weekend</strong> after the orientation to
          let freshers explore various domains of tech
        </WP>
        <WP
          reply={
            "Could not pursue this because of time constraints and council busy with executing Tech&RnD Expo. Will stick to the older mid term and final work reports to be published by clubs as well."
          }
        >
          Ensure that work reports are published on the website & social media
          once in every three months
        </WP>
        <RP>
          Encourage <strong>collaboration</strong> with institute bodies by
          including tech elements in their activities
        </RP>
      </Points>
      <SectionHeader>INTER - IIT TECH MEET</SectionHeader>
      <Points>
        <WP
          reply={
            <>
              Booklet released, closing ceremony planned</>
          }
        >
          Conduct <strong>Inter-IIT Tech Orientation</strong> to spread
          awareness about what exactly happens, the selection procedure and to
          discuss the type of problem statements
        </WP>
        <RP>
          Ensure <strong>quick availability</strong> of resources by maintaining
          a database of equipment vendors from various domains, ensuring all the
          inhouse facilities are working and obtaining funds in advance
        </RP>
        <OP
          reply={
            "Unable to conduct before as dates were not fixed. After release of Problem Statement meetings / brainstorming and sessions by professors/PhD students some conducted before selection. More of these planned for the coming Problem Statements."
          }
        >
          <strong>Inter IIT Tech Camp:</strong> Hold advanced technical training
          sessions on relevant topics targeted specifically at Inter IIT to
          precede contingent selection for the Meet
        </OP>
      </Points>
      <SectionHeader>PG TECH</SectionHeader>
      <Points>
        <RP>
          Form a <strong>closed community</strong> of PG students who will cater
          to the interests of PG Tech enthusiasts
        </RP>
        <RP>
          <strong>PG Tech Weekend:</strong> Reconceptualize the events by
          including hackathons, hands-on activities, and restructure the
          timeline so that it takes place right after the PGs arrive
        </RP>
        <OP
          reply={
            "Work in Progress database being built by PG Nom and by the help of PG conveners"
          }
        >
          Maintain a <strong>database</strong> of potential Inter-IIT
          participants in PG Tech community from various domains
        </OP>
      </Points>
      <SectionHeader>HOSTEL TECH</SectionHeader>
      <Points>
        <RP
        >
          Redesign the <strong>Technical General Championship (GC)</strong>{" "}
          contests to make them more welcoming to newcomers, and ensure club
          collaboration to establish the domain-specific problem statement
        </RP>
        <RP>
          Incentivize hostels to develop their <strong>Tech-room</strong> by
          allocating special points in Documentation GC and providing them with
          the database of basic equipments required in day-to-day tech
        </RP>
        <RP>
          Organize informal tech nights at hostels to hold group talks on
          current tech topics and to display tech projects
        </RP>
      </Points>
      <SectionHeader>PUBLICITY</SectionHeader>
      <Points>
        <RP>
          Release <strong>ITC’s Fresher’s Introduction Video</strong>{" "}
          highlighting tech expectations and encourage participation
        </RP>
        <RP>
          Encourage council members to make short engaging videos on club
          events/projects/geeky topics
        </RP>
        <RP>
          Distribute hoodies/t-shirts for{" "}
          <strong>Inter-IIT participants</strong> or{" "}
          <strong>institute technical award</strong> winners
        </RP>
      </Points>
      <SectionHeader>MISCELLANEOUS</SectionHeader>
      <Points>
        <RP>
          Introduce <strong> bill status portal</strong> for students to make
          bill reimbursement claims and track status
        </RP>
        <RP>
          Document step-by-step procedure for the reimbursement of bills to help
          council members
        </RP>
        <RP
        >
          Introduce the concept of <strong>Tech points</strong>, which can be
          redeemed against various tech equipment to incentivize students for
          continuously participating in tech activities
        </RP>
        <OP
          reply={
            "Ideation and plan done, implementation ongoing; waiting for estate office to complete the wall repair work post that furniture establishment will be done."
          }
        >
          Establishing infrastructure for <strong>STAB room</strong> to convert
          it into a meeting, discussion, and storage space
        </OP>
      </Points>
    </div>
  );
}

export default TechnicalPage;
