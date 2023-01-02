import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import { Title, SectionHeader, SubHeader, Points } from "./MainContent";
function SportsPage() {
  return (
    <div className="container--main">
      <ImageContainer
        name={"Ketan Agrawal"}
        manlink={
          "https://drive.google.com/file/d/1kAkeXitC-clhFw5AIYj8I7eQwsuW7HCo/view?usp=sharing"
        }
        imgsrc={"/ketan.jpeg"}
        por={"General Secretary, Sports Affairs "}
      />
      <Indicator />

      <Title>INITIATIVES </Title>
      <SectionHeader>
        {" "}
        Renaissance |{" "}
        <span style={{ fontFamily: "cursive" }}>
          Ameliorating the rich legacy of IIT Bombay Sports
        </span>
      </SectionHeader>
      <Points>
        <RP>
          {" "}
          Pioneer <strong>la cérémonie</strong>-An inauguration event to
          aggrandize the grandeur of the Sports GC{" "}
        </RP>
        <OP>
          Introduce the <strong>Sports Coverage Program</strong> to facilitate
          collective coverage of sporting events
        </OP>
        <WP>
          Conduct <strong>Sophiesta</strong> to provide to be sophies an
          occasion to experience the essence of Freshiesta
        </WP>
        <OP>
          Establish <strong>one-to-one mapping</strong>among sport and hostel
          representatives for better accountability
        </OP>
      </Points>
      <SectionHeader>
        <strong>Global Symposium | </strong>
        <span style={{ fontFamily: "cursive" }}>
          A one-stop destination to the sports fan
        </span>
      </SectionHeader>
      <Points>
        <WP>
          Launch <strong>Khel Manch</strong>, a multipurpose portal
          incorporating the Indian calendar and live prediction contests in
          order to amplify involvement of general public in major international
          events in 2022
        </WP>
        <WP>
          Facilitate the screening of podium matches of the Indian contingent at
          international tournament
        </WP>
        <OP>
          Organize workshops of unconventional sports played in international
          events to promote diversity
        </OP>
      </Points>
      <SectionHeader>
        <strong>For the Win | </strong>
        <span style={{ fontFamily: "cursive" }}>
          Vision of Inter IIT through the eyes of incoming batches{" "}
        </span>{" "}
      </SectionHeader>

      <Points>
        <WP>
          Execute <strong>Grievance Redressal</strong>, a portal for resolving
          team issues related to the Inter-IIT camp
        </WP>
        <RP>
          Implement regular team fitness tests to gauge, index and upscale the
          individual performances
        </RP>
        <OP>
          Encourage top 5 players of every sport by incorporating their names on
          the wall of the New SAC
        </OP>
      </Points>
      <SectionHeader>
        <strong>Towards a Fitter Insti | </strong>{" "}
        <span style={{ fontFamily: "cursive" }}>
          Empowering the mind body connection
        </span>
      </SectionHeader>
      <Points>
        <RP>
          Organize <strong>Psych Eval</strong> camps bi-annually to enrich the
          mental health and fitness culture in IITB{" "}
        </RP>
        <OP>
          Introduce <strong>PFRP</strong>: Personal Fitness Regime Planner in
          accordance with the IITB Sports App
        </OP>
      </Points>
      <Title>FACILITIES AND INFRASTRUCTURE</Title>
      <Points>
        <WP>
          Expedite <strong> Mega Gymkhana Revamp</strong> by installing iron
          meshes in Hockey, reinstating Table
        </WP>
        <RP>
          Tennis court with synthetic mats, done part wise and fostering the
          restoration process of the stairs
        </RP>
        <WP>
          Install <strong> Regulatory Boards</strong> alongside sporting
          facilities to facilitate compliance and awareness
        </WP>
      </Points>
      <Title>INTER-IIT AND INSTITUTE TEAMS</Title>
      <Points>
        <RP>
          {" "}
          Formulate the <strong> UG Sports Handbook</strong>, depicting the rich
          sports legacy and culture of the institute{" "}
        </RP>
        <OP>
          Organize <strong> Blackcats’ Convention</strong> to enthuse budding
          athletes, inspiring them to clinch Inter IIT
        </OP>
        <OP>
          Introduce <strong> Blackcat Expeditions</strong> - short contingent
          excursions, trips and getaways geared towards increasing the
          camaraderie among the members of the Inter-IIT contingen
        </OP>
        <OP>
          {" "}
          Instate simultaneous trials across sports, achieving better cognizance
          and enhanced outreach
        </OP>
      </Points>
      <Title>EVENTS</Title>
      <Points>
        <RP>
          Establish a cycling club and conduct <strong> Tour De Insti</strong>,
          a cycling marathon as its flagship event{" "}
        </RP>
        <WP>
          Introduce <strong> Indian Sports Extravaganza</strong> taking our
          culture of indigenous games to the forefront{" "}
        </WP>
        <WP>
          Celebrate a <strong> Para Sports Day</strong> to sensitize students
          and celebrate the spirit of Sports for All{" "}
        </WP>
        <WP>
          Mandate the issuing of E-Certificates for sport events to formalize
          the incentivization process
        </WP>
      </Points>
      <Title>HOSTEL COORDINATION </Title>
      <Points>
        <WP>
          Launch the <strong> GC Diaries</strong>, a video series portraying the
          past splendor of the Hostel Sport GCs
        </WP>
        <RP>
          Initiate <strong> annual sports timeline</strong> in the Sports App by
          incorporating live updates, points table and the fixtures of GCs to
          formalize and define structure to the conduction of the Hostel Sport
          GCs
        </RP>
        <RP>
          Inculcate synergic conclave in addition with Sports-Com to facilitate
          inclusivity & prevalence{" "}
        </RP>
      </Points>
      <Title>Girls</Title>
      <Points>
        <WP>
          Introduce <strong> Mixed Sports Weekend</strong> in order to bridge
          the participation gap across both genders
        </WP>
        <OP>
          Organize Shield Maiden, an institute-wide talk and self-defense
          workshop on the occasion of the National Women’s Health and Fitness
          Day to encourage the representation of female athletes{" "}
        </OP>
        <WP>
          Initiate QWin, series of gym training sessions with exclusive women
          slots with a female trainer
        </WP>
      </Points>
      <Title>PG Sports</Title>
      <Points>
        <RP>
          Organize PG Freshiesta to cater to PG new entrants from both semesters
          in the autumn semester
        </RP>
        <RP>
          Launch inter-programme league matches across sports, channelizing
          intrinsic competitive spirit
        </RP>
        <WP>
          Introduce workshops before the PG Sports GC to augment participation
          in unheralded sports
        </WP>
      </Points>
      <Title>Creatives and Journalism</Title>
      <Points>
        <OP>
          {" "}
          Design <strong> Annual Lookback Memoir</strong> to immortalize the
          sports fest in collaboration with Aavhan{" "}
        </OP>
        <WP>
          Start a <strong> Legacy Podcast</strong> essaying forgotten
          chronicles, inviting alumni to relive their memories
        </WP>
        <OP>
          Procure two cameras & accessories for the sports council to facilitate
          the comprehensive coverage of most of the institute wide events geared
          towards augmenting their reach
        </OP>
        <WP>
          Direct an Introductory Video elucidating about sport facilities and
          clubs to ignite enthusiasm
        </WP>
      </Points>
      <Title>Follow UPs</Title>
      <Points>
        <WP>
          Follow up on building of open gym to provide better ventilated areas
          to promote fitness in insti
        </WP>
        <OP>
          Track the installation of energy-efficient LED lights in Badminton
          Courts and Indoor Gymkhana
        </OP>
        <WP>
          Pursue the creation of 100-meter synthetic track construction to ease
          athletics monsoon practices
        </WP>
        <WP>
          Follow up on the construction of multipurpose Football turf and
          renovation of Badminton courts
        </WP>
      </Points>
    </div>
  );
}

export default SportsPage;
