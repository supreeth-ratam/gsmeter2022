import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import Title from "../Title/Title";
import { SectionHeader, SubHeader, Points } from "./MainContent";
function AcadsPgPage() {
  return (
    <div className="container--main">
      <Title lastUpdated={"23/01/2023"}>Gsaa Meter</Title>
      <ImageContainer
        name={"Vishakha"}
        manlink={
          "https://drive.google.com/file/d/1k8lNyKtkizbJnZwXB33KPepvw_pbP-N7/view?usp=sharing"
        }
        imgsrc={"/vishaka.png"}
        por={"General Secretary Academic Affairs PG"}
        chartsrc={""}
        completed={30.4}
        notstarted={30.4}
        ongoing={39.2}
        unclear={0}
      />
      <Indicator />
      <SectionHeader>Skill Development</SectionHeader>
      <Points>
        <RP>
          Provide awareness camps for noncore company aspirants and provide{" "}
          <strong>industry</strong> specific <strong>placement training</strong>{" "}
          for core company aspirants in coordination with the Placement Cell
        </RP>
        <WP>
          In collaboration with SARC, build a strong technical skill development
          mentorship program for PG students
        </WP>
        <OP
          reply={
            "The sessions were conducted to improve such skills but not using programming"
          }
        >
          Increase the frequency of{" "}
          <strong>writing and communication skill</strong> workshops and
          organize <strong>problem solving skills workshops</strong> to train
          students on how to approach problems related to their research topics
          using programming, in each department
        </OP>
      </Points>
      <SectionHeader>Academics/R&D</SectionHeader>
      <Points>
        <RP>
          Introduce an academic help program for first-year PhD students who
          need guidance
        </RP>
        <WP>
          Push the departments to appoint lab assistants to handle certain
          instruments for better time management and efficiency
        </WP>
        <OP
          reply={
            "Most of the departments have CPI based qualifiers. Earth sciences department's HOD came with the proposal to introduce qualifiers based on written test, which was then questioned (GSAA and IDR involved) and turned down by the PGPC. We, DGsec and IRSCP propsed CPI based qualifiers in mechanical which was turned down in the DPGC by the faculties (voting was used to come to this conclusion). "
          }
        >
          Establish a CPI-based qualifiers across all the departments
        </OP>
        <RP>
          Push the departments to increase the minor courses being offered for
          masters and provide guidance for Master's in the first year on how to
          select minor courses
        </RP>
        <WP
          reply={
            " (Many complications were there) Instead we purposed M.tech./M.sc. degree to those students who directly joined after B.Tech and this initiative is accepted in the PGPC and documentation on its implementation is in progress. "
          }
        >
          Explore the possibility of introducing minor degree to PhD students
        </WP>
        <OP
          reply={
            "The proposal was discussed with Dean AP and Adean AP and was forwarded to DD FEA for further investigation. DD FEA agreed and will discuss it in the next BOG meeting."
          }
        >
          Continue the efforts of current council to increase the{" "}
          <strong>funding for conference travels</strong> for Master/PhD
          students and improve listing of upcoming conferences in the country
          and abroad
        </OP>
        <RP>
          In collaboration with International Relations office, conduct sessions
          on the research <strong>internship</strong> opportunities for PG
          students and familiarize the students on how to choose and apply for
          them
        </RP>
        <RP>
          Carry forward the initiative to form a{" "}
          <strong>clear and effective internship policy</strong> for M.Tech.
          students in collaboration with all stakeholders
        </RP>
        <WP>
          Improve the facilities for research by increasing the number of HPCs,
          anechoic chamber, etc
        </WP>
        <WP
          reply={
            "Instead a better option like choosing NPTEL for online learning was discussed and accepted by IIT-M. Earlier this initiative was only for IIT-M students, which was then expanded to all the PMRF grating institutes after our discussion. "
          }
        >
          Push for Institute level MOUs with local government colleges for the
          PMRF students to fulfill external TA requirement and provide a channel
          to connect with local colleges
        </WP>
      </Points>
      <SectionHeader>Fellowships</SectionHeader>
      <Points>
        <WP>
          Push for a merit-based <strong>TA allocation policy</strong> for
          Instruments/Laboratory TAs
        </WP>
        <OP
          reply={
            "This has been proposed and discussed with Dean AP, and sent it to departments for implementation. Some departments have implemented it and provide TA certificated, attested by HOD. "
          }
        >
          Push for the formation of clear policies to award TA certificates as
          part of graduation transcript
        </OP>
        <OP
          reply={
            "While major issues have been tackled some of them are still under progress."
          }
        >
          Continue the efforts of current council in solving the issues related
          to CSIR fellowship disbursement from the institute side
        </OP>
        <OP
          reply={
            "Has been discussed with Director. Referred to DD FEA, and discussion is in progress"
          }
        >
          Continue the efforts of the current council for demanding extension{" "}
          <strong>of fellowship</strong> for all students as a compensation for
          the time lost due to COVID-19 shut down
        </OP>
      </Points>
      <SectionHeader>Events</SectionHeader>
      <Points>
        <OP
          reply={
            "Several department's AURAA conducted this event. However due to the lack of senior PG student's time, it wasn't as successful as expected."
          }
        >
          Take initiative to conduct a PG level fresher’s get-together to
          welcome the newcomers and promote interaction between different
          batches
        </OP>
        <RP>
          In collaboration with SARC, increase the frequency of department
          specific sessions by PhD <strong>alumni on</strong> career{" "}
          <strong>options after</strong> PhD
        </RP>
        <RP>
          Publicise <strong>‘Pop the question’</strong> - a discussion forum on
          MS-Teams, by PGAC
        </RP>
      </Points>
      <SectionHeader>Mental Health</SectionHeader>
      <Points>
        <WP>
          Conduct mental health awareness sessions in collaboration with Student
          Wellness Center
        </WP>
        <OP
          reply={
            "Several department's AURAA conducted this event. However due to the lack of senior PG student's time, it wasn't as successful as expected."
          }
        >
          Organize "Buddy talk" - a series of informal get-togethers for better
          interaction among peers.
        </OP>
        <OP reply={"We succesfully got Aerospace's Ph.D. Lounge."}>
          Carry forward the work of establishing PhD lounge in each department
        </OP>
      </Points>
    </div>
  );
}

export default AcadsPgPage;
