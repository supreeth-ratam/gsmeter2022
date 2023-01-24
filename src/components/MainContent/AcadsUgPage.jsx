import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import Title from "../Title/Title";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import IP from "../Points/IP";
import Indicator from "../Points/Indicator";
import {  SectionHeader, SubHeader, Points } from "./MainContent";
function AcadsUgPage() {
  return (
    <div className="container--main">
      <Title lastUpdated={"20/01/2023"}>Gsaa Meter</Title>
      <ImageContainer
        name={"Ayush Ambadas Dahale"}
        manlink={
          "https://drive.google.com/file/d/1tr7XhEAyIDQvOYcxb-bxrhfzscsNzsl8/view?usp=sharing"
        }
        chartsrc={"/ACADug.png"}
        imgsrc={"/aayush.png"}
        por={"General Secretary Academic Affairs UG"}
        completed={22.85}
        notstarted={28.58}
        ongoing={48.57}
        unclear={0}
      />
      <Indicator />
      <SectionHeader>Key Initiatives</SectionHeader>
      <Points>
        <RP>
          {" "}
          Propose a <strong>multistage adjustment period</strong>, consisting of
          1 week for course registration adjustment and 3 weeks for course drop
          adjustment period{" "}
        </RP>
        <OP
          reply={
            "policy side is done, will be approved and implemented by 3rd sem of freshies"
          }
        >
          Propose an addition of a Minor program in Quantum Technology as a part
          of ug cur riculum comprising courses of Electrical, Physics and
          Computer Science department.
        </OP>
        <OP
          reply={
            "research park has approved, funding will be from them and dean R&D, only dates are to be finalised keeping E-Summit and sarcasm in mind"
          }
        >
          Organise an Industrial Symposium in collaboration with the IIT Bombay
          Research Park as an avenue for students to network with and explore
          Industries{" "}
        </OP>
        <OP reply={"ongoing"}>
          Propose an undergraduate research award URA01 (pre-final year
          undergraduate re search) and URA02 (BS Project research) for students
          enrolled in B.S. programmes{" "}
        </OP>
        <RP>
          Conduct an immersion program with SMP to aid incoming sophomores get
          acquainted to the campus and the new challenges of offline mode of
          academics for smoother transition{" "}
        </RP>
      </Points>
      <SectionHeader>INFORMATION DISSEMINATION AND AWARENESS </SectionHeader>
      <Points>
        <WP
          reply={
            "will be part of website which will be released by end of tenure"
          }
        >
          Start a bi-monthly blog with updates on policy, proposal updates and
          council activities
        </WP>
        <WP reply={"website issues"}>
          Conduct awareness drives regarding opportunities, courses and
          resources provided by the 30+ academic and research centres at IITB,
          to be hosted on External Portal on Insti App
        </WP>
        <WP reply={"website issues"}>
          Develop a research portal to serve as a one stop for all research
          related activities by hosting student research profiles, and
          application portals for SURP, iSURP and CORE{" "}
        </WP>
      </Points>
      <SectionHeader>ACADEMIC AND POLICY REFORMS </SectionHeader>
      <Points>
        <OP
          reply={
            "ongoing, approved by SC/ST cell facads and DDAIA, will be proposed in UGPC (end of dec 2022) and then needs to be approved by senate"
          }
        >
          Push for creating department wise list of approved NPTEL and CDEEP
          courses for crediting, to be decided and updated by DUGC every
          semester.
        </OP>
        <OP
          reply={
            "ongoing, waiting for approval from each department with DD programmes,might not be relevant since most depts are discontinuing DD programmes"
          }
        >
          Implement the policy for including fourth-year dual degree students in
          the internship season with the Placement and Training Cell
        </OP>
        <WP
          reply={
            "working on policies related to grading system, this issue will be taken up after that"
          }
        >
          Push for formalising Course Coordination Committee to ensure
          uniformity in course content, evaluation scheme and grading policies
          across different sections for a course
        </WP>
        <RP>
          Follow up on Ease of Access Cell to better campus life for the
          differently-abled students
        </RP>
        <OP reply={"survey has been created, has not been integrated yet"}>
          Follow up on the integration of Institute Exit Survey as a part of no
          dues process to act as a feedback mechanism for graduating students.{" "}
        </OP>
        <RP>
          Push for improving FacAd-student interaction by mandating FacAd
          orientation
        </RP>
      </Points>
      <SectionHeader>Web and Infrastructure</SectionHeader>
      <Points>
        <WP reply={"website will be done by end of tenure"}>
          {" "}
          Reinstate the UGAC Website to centralise all web content and portals
        </WP>
        <RP
          reply={
            "Dean AP said only hard copies of documents will be accepted for official purposes, hence AMS not being used"
          }
        >
          Follow up on expanding the utility of AMS portal by increasing
          functionality across administrative units by including forms for URA
          applications, transcripts, bonafide, etc
        </RP>
      </Points>
      <SectionHeader>PROMOTION OF WORK EXPERIENCE AND RESEARCH</SectionHeader>
      <Points>
        <OP
          reply={
            "had sent a proposal with GSTA in June-July but got rejected because it needed to be more robust wrt grading and ensuring quality of work,will probably send revised proposal in next UG/PGPC in Jan-end"
          }
        >
          Propose crediting of research work in student tech teams as SLPs/RnD
          Projects
        </OP>
        <OP reply={"clubbed with the industrial symposium"}>
          Collaboration for Industrial and Research activities with IIT Bombay
          Research Park <br /> Conduct orientation and outreach programme of IIT
          Bombay Research Park <br /> Provide students with industrial exposure,
          funding, and mentorship <br /> Organise ReCon (UG student Research
          Convention) as a platform to showcase research
        </OP>
        <RP>
          Push for curriculum-oriented research exposure (CORE) program to
          provide sophomore students with more curriculum aligned research
          opportunities
        </RP>
      </Points>
      <SectionHeader>CAREER CELL</SectionHeader>
      <Points>
        <RP>
          Adopt <strong> Capstone Course Methodology</strong> for Learners’
          Space providing the students with the opportunity to use the knowledge
          they have gained through the course
        </RP>
        <OP
          reply={
            "mentoship programme didnt fit timeline so released GRAD booklet instead with details of people who got into different unis"
          }
        >
          Formalise a Gradmentorship Program to guide prospective grad school
          applicants through the application process and conduct seminars for
          information dissemination{" "}
        </OP>
        <OP
          reply={
            "planning in feb as a consult+policy thing, progs and dgsec of CPS are interested"
          }
        >
          Organize a <strong> Public Policy</strong> Conclave in collaboration
          with think-tanks, to provide hands on exposure to the students
          interested in exploring the domain{" "}
        </OP>
        <OP
          reply={
            "compiled but will be released towards end of tenure so as to help in next intern season"
          }
        >
          Introduce <strong> Internship Bluebook</strong> comprising company and
          profile details along with relevant preparation resources and
          experience
        </OP>
      </Points>

      <SectionHeader>STUDENT SUPPORT SERVICES</SectionHeader>
      <Points>
        <WP reply={"website issues"}>
          Introduce an <strong> academic blog</strong> to streamline retagging,
          registration and scholarship queries
        </WP>
        <WP
          reply={
            "resobin cant hold recordings, so textual resources have been added there so far, proper TSC central will be made with website"
          }
        >
          {" "}
          Introduce <strong> TSC Central</strong> on the UGAC Website to host
          TSC recordings and other resources{" "}
        </WP>
        <WP>
          Introduce a portal to centralise resources and information about
          non-institute scholarships and professional opportunities to aid
          students in applying for the same
        </WP>
        <OP
          reply={
            "coordinating with ARP coordinators of each dept and Prof Belur of SC/ST cell"
          }
        >
          Push for hiring of <strong> ARP TAs </strong> across all departments
          in coordination with D-AMP teams{" "}
        </OP>
        <OP
          reply={
            "testing portal with profs also almost complete, selections of next set of TAs should hopefully be through this but a little prof dependent as some prefer google forms"
          }
        >
          {" "}
          Reinstate a centralised TA portal and implement TA feedback for
          improved accountability.
        </OP>
      </Points>

      <SectionHeader>CLUBS</SectionHeader>
      <Points>
        <WP
          reply={
            "scheduled an event with HUL to launch in october but they cancelled, has been on hold since then"
          }
        >
          Introduce a <strong> Supply Chain & Operations</strong> wing under
          Analytics club in coordination with EnPoWER to foster discussions and
          community building for interested students
        </WP>
        <RP>
          Restructure the <strong> Consult Core Group</strong> and start taking
          pro-bono cases from startups
        </RP>
        <WP reply={"awaiting details"}>
          Introduce a comprehensive course on <strong> Personal Finance</strong>{" "}
          under the Finance Club
        </WP>
        <OP
          reply={
            "did not get a lot of data about engagement with clubs so pivoted to covid data to see how it affected grades, attendance etc, (got anon data from asc), will publish report by end of tenure and some details in midterm report"
          }
        >
          Repurpose the DAV Team to quantify student engagement with institute
          clubs and bodies
        </OP>
      </Points>

      <SectionHeader>EXTERNAL RELATIONS </SectionHeader>
      <Points>
        <OP
          reply={
            <>
              will be implemented this time, wasn't done last time as ISIR was
              appointed very late
            </>
          }
        >
          Introduce <strong> Swagat</strong>, an Orientation programme for
          inbound semester exchange students{" "}
        </OP>
        <RP>
          {" "}
          Organise sessions on scholarships and financing for students applying
          for higher studies{" "}
        </RP>
      </Points>
    </div>
  );
}

export default AcadsUgPage;
