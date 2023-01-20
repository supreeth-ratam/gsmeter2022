import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import WP from "../Points/WP";
import RP from "../Points/RP";
import OP from "../Points/OP";
import Indicator from "../Points/Indicator";
import { SectionHeader, SubHeader, Points } from "./MainContent"
import Title from "../Title/Title";

function CulturalPage() {
  return (
    <div className="container--main">
      <Title
      lastUpdated={"20/01/2023"}
      >Gsca Meter</Title>
      <ImageContainer
        name={"Divya Mrinal"}
        manlink={
          "https://drive.google.com/drive/folders/1WId3MhG6sZo0XGrM3NG0b79_cglhM340"
        }
        imgsrc={"/divya.png"}
        por={"General Secretary Cultural Affairs "}
        completed={8}
        notstarted={84}
        ongoing={8}
        unclear={0}
      />
      <Indicator />
      <SectionHeader>Food Fiesta</SectionHeader>
      <Points>
        <RP>
          Set up a culinary club for food enthusiasts and food connoisseurs to explore the genre of Culinary Arts
        </RP>
        <WP>
          Set up a kitchen facility for culinary experimentation and recommend new dishes to the mess councils
        </WP>
        <WP>
          Introduce student run cafes to provide open and competitive culinary opportunities to enthusiasts and allow food connoisseurs and general public to enjoy this food at the nominal rates
        </WP>
      </Points>
      <SectionHeader>Library Project</SectionHeader>
      <Points>
        <WP>
          Facilitate small informal events and meets of clubs to be conducted in the Central Library courtyard
        </WP>
        <WP>
          Allocate a discussion room within the Central Library to conduct book club meets, writes meet, etc.
        </WP>
        <WP>
          Cult Library: Genre specific, learning based and historical books such as Natyashashtra or Berklee Music Theory Book to be bought and maintained by the Central Library for in-depth learning
        </WP>
        <WP>
          Crowdsource book lists to be bought by the Central Library from the students’ recommendations
        </WP>
      </Points>
      <SectionHeader>IIT Bombay Creatives</SectionHeader>
      <Points>
        <WP>
          Release an episode per month of a mini-series based on life at IIT Bombay from culturals platforms
        </WP>
      </Points>
      <SectionHeader>Incubation Cell for Cultural Entrepreneurship</SectionHeader>
      <Points>
        <WP>
          Propose SINE IIT Bombay to start an incubation cell for cultural entrepreneurship providing all the support necessary to help art-based entrepreneurs to establish themselves
        </WP>
      </Points>
      <SectionHeader>Tech Integration to Ease Workflows</SectionHeader>
      <Points>
        <WP>
          Social Media Analytics: Set up monitoring and analytic system using online softwares for all cult social media handles to improve the reach of events
        </WP>
        <WP>
          Using Social Media software to automate the broadcast of posts across all cult social media platforms easing the process of publicity
        </WP>
        <WP>
          InstiApp for Cult: Introduce personalized push notifications incorporating messages from the mascot to publicize major events like flagships and PAF in collaboration with DevCom IIT Bombay
        </WP>
      </Points>
      <SectionHeader>History and Future</SectionHeader>
      <Points>
        <WP>
          Global Immersion: Provide opportunities for foreign-exchange students and IIT Bombay students to mingle and absorb each other’s cultures for an overall wholesome experience
        </WP>
        <WP>
          Dedicate a ‘Memory Wall’ in Old SAC for graduating students to write down their cult memories
        </WP>
        <WP>
          Compile an online ‘Hall Of Fame’ on cultural website to honor and store our cultural achievements
        </WP>
        <RP>
          Introduce Institute Comedy Nominee to manage, run, and expand the Comedy Cons Club
        </RP>
      </Points>
      <SectionHeader>PG Cult and NSO Cult</SectionHeader>
      <Points>
        <RP>
          Conduct a second round of PG Cult Orientation for Ph.D. freshers who join in the spring semester.
        </RP>
        <WP>
          Make a separate PG Freshers Introductory Video under PG Cult every year to welcome the PG freshers
        </WP>
        <WP>
          Propose to expand NSO Cult by incorporating new genres like NSO Design
        </WP>
      </Points>
      <SectionHeader>Revamps and Consolidations</SectionHeader>
      <Points>
        <WP>
          Record offline cultural courses in collaboration with CDEEP Studio facility
        </WP>
        <WP>
          Work on a cultural lookback video throughout the year in collaboration with IIT BBC to be showcased as Culturals Introductory Video in the following orientation session
        </WP>
        <WP>
          Feedback Forum: Online, on the spot mechanism on culturals website for constructive feedback and suggestions on events and performance of the council
        </WP>
        <OP>
          Discount Stalls: Set up temporary stalls for music instruments, ‘Books by Weight’ expo, costumes, camera accessories and repairs to enable easy access of these services to the insti junta
        </OP>
        <OP>
          Genre Freshman of the year: With the Cultural Freshman of the Year, propose to reward annually, one freshman in each genre amongst undergraduates and postgraduates separately
        </OP>
        <WP>
          Expansion of Cult Internships and Freelance Cult to incorporate more genres and provide opportunities
        </WP>
        <WP>
          Shift Cultural Orientation to Convocation hall to cater to the audience of both freshmen and sopho mores and incorporating mascot in the event giving out freebies to the students
        </WP>
      </Points>
      <SectionHeader>Publicity and Outreach</SectionHeader>
      <Points>
        <WP>
          Promote publicity of major cultural events using posters, banners and flags through auto rickshaws that run around inside the institute
        </WP>
        <WP>
          Personifying culturals by regularly using the mascot and creating engagement channels like comic strips, QnA and AMA stories for the culturals social media handles
        </WP>
        <OP>
          Publicity Wing: Expand the scope of the Publicity Wing in the council by undertaking publicity campaigns, branding of culturals using mascot and focusing on better audience engagement and reach
        </OP>
      </Points>
      <SectionHeader>PAF, Hostels and GCs</SectionHeader>
      <Points>
        <WP>
          Collaborate with journalists, media houses to publicize PAF and revel in its history on a larger scale
        </WP>
        <WP>
          Facilitate publicity of PAF by launching its merchandise and introducing customized food packaging
        </WP>
        <WP>
          Hostel Escapades: Collaborate with hostels on a rotational basis to conduct biweekly events like informal sessions and meets to increase participation of hostel inmates
        </WP>
        <WP>
          GC Guide: Provide previous GC entries in some genres and preparatory material via Athena+ portal
        </WP>
        <WP>
          Update and expand the InstiWiki page for Culturals incorporating information about PG Cult and PAF
        </WP>
      </Points>
      <SectionHeader>Inventory and Infrastructure</SectionHeader>
      <Points>
        <WP>Maintain a database of cultural inventory in SAC and hostels, and build a method for issuing inventory, ensuring accountability through the use of a portal</WP>
        <WP>
          Upgrade the SAC inventory; ensuring purchase of DSLRs, minimal lights, recording equipment , etc.
        </WP>
        <WP>
          Set up wifi in Old SAC Cult Rooms to ensure proper internet connection for small events and meet
        </WP>
        <WP>
          Shift books from SAC library and the hostel libraries to the Central Library providing a centralized place for all books
        </WP>
      </Points>



    </div>
  );
}

export default CulturalPage;
