import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import IP from "../Points/IP"
import Indicator from "../Points/Indicator";
import { Title, SectionHeader, SubHeader, Points } from "./MainContent";
function SportsPage() {
  return (
    <div className="container--main">
      <Title>Gssa Meter</Title>
      <ImageContainer
        name={"Ketan Agrawal"}
        manlink={
          "https://drive.google.com/file/d/1kAkeXitC-clhFw5AIYj8I7eQwsuW7HCo/view?usp=sharing"
        }
        imgsrc={"/ketan.jpeg"}
        por={"General Secretary, Sports Affairs "}
        completed={22.5}
        notstarted={35}
        ongoing={27.5}
        unclear={15}
      />
      <Indicator />

      <Title>INITIATIVES </Title>
      <SectionHeader> Renaissance | </SectionHeader>
      <SubHeader>Ameliorating the rich legacy of IIT Bombay Sports</SubHeader>
      <Points>
        <RP>
          {" "}
          Pioneer <strong>la cérémonie</strong>-An inauguration event to
          aggrandize the grandeur of the Sports GC{" "}
        </RP>
        <OP reply={"tt and squash live streams; ISC yt"}>
          Introduce the <strong>Sports Coverage Program</strong> to facilitate
          collective coverage of sporting events
        </OP>
        <WP>
          Conduct <strong>Sophiesta</strong> to provide to be sophies an
          occasion to experience the essence of Freshiesta
        </WP>
        <OP
          reply={
            <>
              <p>Resolved</p>
              <p>One to one mapping between hostels and sports council is done, you can confirm from different hostel sports co the information delivery is very smooth and their opinions are listened properly</p>
            </>
          }
        >
          Establish <strong>one-to-one mapping</strong>among sport and hostel
          representatives for better accountability
        </OP>
      </Points>
      <SectionHeader>
        <strong>Global Symposium | </strong>
      </SectionHeader>
      <SubHeader>A one-stop destination to the sports fan</SubHeader>
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
        <OP reply={"kabaddi and zumba workshop was done hiit discontinued"}>
          Organize workshops of unconventional sports played in international
          events to promote diversity
        </OP>
      </Points>
      <SectionHeader>
        <strong>For the Win | </strong>
      </SectionHeader>
      <SubHeader>
        {" "}
        Vision of Inter IIT through the eyes of incoming batches
      </SubHeader>

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
      </SectionHeader>
      <SubHeader>Empowering the mind body connection</SubHeader>
      <Points>
        <RP>
          Organize <strong>Psych Eval</strong> camps bi-annually to enrich the
          mental health and fitness culture in IITB{" "}
        </RP>
        <OP
          reply={
            "resolved: PFRP are taken care of by the coaches for the camp players and it has gone smooth, soon enough can be implemented for general public"
          }
        >
          Introduce <strong>PFRP</strong>: Personal Fitness Regime Planner in
          accordance with the IITB Sports App
        </OP>
      </Points>
      <Title>FACILITIES AND INFRASTRUCTURE</Title>
      <Points>
        <WP>
          Expedite <strong> Mega Gymkhana Revamp</strong> by installing iron
          meshes in Hockey, reinstating Table Tennis court with synthetic mats, done part wise and fostering the
          restoration process of the stairs
        </WP>
        <WP>
        Set up a temporary sport goods outlet at the H12-13-14 premises for purchase and maintenance
        </WP>
        <IP>
          Install <strong> Regulatory Boards</strong> alongside sporting
          facilities to facilitate compliance and awareness
        </IP>
      </Points>
      <Title>INTER-IIT AND INSTITUTE TEAMS</Title>
      <Points>
        <RP>
          {" "}
          Formulate the <strong> UG Sports Handbook</strong>, depicting the rich
          sports legacy and culture of the institute{" "}
        </RP>
        <OP
          reply={
            <>Resolved
              <br />
              Blackcats expedition and blackcats convention, both of them are completed For the first one, there were team dinners specifically, trek to Sameer hill, informal session at beach and this was varying sport wise, as there are totally different teams.<br />
              For the second one 100 days to go and the day camp was started and continuously through iitbsports page the importance of being a part of IIT Bombay was reflected<br />
              In this part only the 4th point Instate simultaneous trials across sports is also accomplished. Clear information was given in week gap time to all the players</>
          }
        >
          Organize <strong> Blackcats’ Convention</strong> to enthuse budding
          athletes, inspiring them to clinch Inter IIT
        </OP>
        <OP reply={"resolved"}>
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
        <OP
          reply={
            "Indian sports extravaganza is either on 14th or 26th Jan, so it is yet to be completed"
          }
        >
          Introduce <strong> Indian Sports Extravaganza</strong> taking our
          culture of indigenous games to the forefront{" "}
        </OP>
        <WP>
          Celebrate a <strong> Para Sports Day</strong> to sensitize students
          and celebrate the spirit of Sports for All{" "}
        </WP>
        <IP>
          Mandate the issuing of E-Certificates for sport events to formalize
          the incentivization process
        </IP>
      </Points>
      <Title>HOSTEL COORDINATION </Title>
      <Points>
        <RP
          reply={
            "We released GC video collectively of that sport stating hostel views and statements"
          }
        >
          Launch the <strong> GC Diaries</strong>, a video series portraying the
          past splendor of the Hostel Sport GCs
        </RP>
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
        <IP
          reply={
            "a self defence workshop was held around independence day iirc"
          }
        >
          Organize Shield Maiden, an institute-wide talk and self-defense
          workshop on the occasion of the National Women’s Health and Fitness
          Day to encourage the representation of female athletes{" "}
        </IP>
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
        <IP>
          Launch inter-programme league matches across sports, channelizing
          intrinsic competitive spirit
        </IP>
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
        <IP>
          Procure two cameras & accessories for the sports council to facilitate
          the comprehensive coverage of most of the institute wide events geared
          towards augmenting their reach
        </IP>
        <OP reply={"Introductory video has been made, posted on insta/fb and YouTube"}>
          Direct an Introductory Video elucidating about sport facilities and
          clubs to ignite enthusiasm
        </OP>
      </Points>
      <Title>Follow UPs</Title>
      <Points>
        <WP>
          Follow up on building of open gym to provide better ventilated areas
          to promote fitness in insti
        </WP>
        <IP>
          Track the installation of energy-efficient LED lights in Badminton
          Courts and Indoor Gymkhana
        </IP>
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
